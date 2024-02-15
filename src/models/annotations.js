var mongoose = require('mongoose');

var annotations = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean
});

module.exports = mongoose.model('Annotations', annotations);