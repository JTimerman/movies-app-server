var mongoose = require('mongoose');

var peliculaSchema = mongoose.Schema;

var peliculaSchema = new Schema({
    nombre:String,
    puntajePromedio:Number, 
    cantidadVotos:Number    
});

var Peliculas = mongoose.model('Pelicula', peliculaSchema);
console.log("se creo modelo");
module.exports = Peliculas;