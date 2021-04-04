const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name:  String,
    email: String,
    phone:String
});

// Crear el modelo
var Client = mongoose.model('Client', clientSchema);

module.exports = Client;