var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/modular');

var db = module.exports = mongoose;


