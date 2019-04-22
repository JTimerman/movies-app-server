var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var equipoSchema = new Schema({
    nombre:String,
    promedio:Number,
    cantidadVotos:Number
    
});

var Equipos = mongoose.model('Equipo', equipoSchema);
console.log("se creo modelo");
module.exports = Equipos;