module.exports = function (app) {
    var curso = app.controller.curso;
    var valid = require('./../middlewares/valid');
    app.get('/cadastroCurso', valid, curso.cadastroCurso);
    app.get('/listaCurso', valid, curso.listaCurso);
    app.post('/novoCurso', curso.novoCurso);
    app.get('/menu', valid, curso.menu);    
}; 	
   