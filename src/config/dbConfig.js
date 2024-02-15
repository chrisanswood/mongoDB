
var mongoose = require('mongoose');
var dbConfig = "mongodb+srv://root:root@cluster0.ypip2k3.mongodb.net/annotations?retryWrites=true&w=majority";


var connection = mongoose.connect(dbConfig);

module.exports = connection;