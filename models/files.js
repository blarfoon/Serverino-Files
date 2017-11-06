var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: { type: String, required: true },
    filename: { type: String, required: true },
    path: { type: String, required: true },
    hash: { type: String, required: true },
    filesize: { type: Number, required: true }
})

module.exports = mongoose.model('File', schema);