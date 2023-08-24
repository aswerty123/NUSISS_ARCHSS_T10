const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SearchSchema = new Schema({
});

module.exports =  mongoose.model('search', SearchSchema);