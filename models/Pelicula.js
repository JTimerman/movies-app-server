var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var peliculaSchema = new Schema({
    nombre:String,
    promedio:Number, 
    cantidadVotos:Number,
    votosTotales:Number    //lala
});

var Peliculas = mongoose.model('Pelicula', peliculaSchema);
console.log("se creo modelo");
module.exports = Peliculas;