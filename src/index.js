var express = require('express');
require('./config/dbConfig');
var cors = require('cors');

var app = express();
var routes = require('./routes');
var port = process.env.PORT || 3333;
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);