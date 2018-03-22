exports.notFound = function (request, response, next) {
    response.status(404);
    response.render('error404');
};
exports.serverError = function (erro, request, response, next) {
    response.status(500);
    response.render('error', { erro: erro });
};