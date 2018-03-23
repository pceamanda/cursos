var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var error = require('./middlewares/error');

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/cursos');
mongoose.connection.on('connected', function () {
  console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error', function (err) {
  console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('=====Conexão finalizada=====');
});


app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('cursos'));
app.use(expressSession());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
load('model')
  .then('controller')
  .then('routes')
  .into(app);
//middlewares
app.use(error.notFound);
app.use(error.serverError);
app.listen(3000, function () {
  console.log("Aplicação no ar.");
}); 