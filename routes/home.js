module.exports = function (app) {
    var home = app.controller.home;
    var valid = require('./../middlewares/valid');
    app.get('/', home.index);
    app.get('/cadastroUsuario', home.cadastroUsuario)
    app.post('/novoUsuario', home.novoUsuario)
    app.post('/login', home.login);
    app.get('/logout', home.logout);
}; 