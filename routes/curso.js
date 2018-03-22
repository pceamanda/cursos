module.exports = function (app) {
    var valid = require('./../middlewares/valid');
    var curso = app.controller.curso;
    app.get('/cadastroCurso', valid, curso.cadastroCurso);
    app.get('/listaCurso', valid, curso.listaCurso);
    app.post('/novoCurso', curso.novoCurso);
}; 	
   