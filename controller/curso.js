module.exports = function (app) {
    var Curso = app.model.curso;
    var CursoController = {
        //chamadas a páginas via get
        cadastroCurso: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('curso/cadastroCurso', params);
        },
        novoCurso: function (request, response) {
            var codigo = request.body.curso.codigo;
            var descricao = request.body.curso.descricao;
            var ch = request.body.curso.ch;
            var categoria = request.body.curso.categoria;

            if (codigo.trim().length == 0 || descricao.trim().length == 0 || ch == 0 || categoria.trim().length == 0) {
                response.redirect('/cadastroCurso');
            }
            else {
                var curso = request.body.curso;
                Curso.create(curso);
                response.redirect('/listaCurso');
            }
            response.redirect('/menu');
        },
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('curso/menu', params);
        },
        listaCurso: function (request, response) {
            Curso.find(function (erro, curso) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: curso };
                    response.render('curso/listaCurso', params);
                }
            });
        }
    };
    return CursoController;
};