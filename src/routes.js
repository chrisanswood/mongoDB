var express = require('express');
var routes = express.Router();
var Annotations = require('./controllers/annControll');
var Priority = require('./controllers/priority');
const Content = require('./controllers/content');

routes.post('/annotations', Annotations.create);
routes.get('/annotations', Annotations.read);
routes.delete("/annotations/:id", Annotations.delete);


//priority
routes.get('/priorities', Priority.ler);
routes.post('/priorities/:id', Priority.atualizar);

//content d
routes.post('/notes/:id', Content.atualizar);

module.exports = routes;