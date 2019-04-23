var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
    comentario:String,
    puntaje:Number,
    nombreUsuario:String,
    nombrePelicula:String
    
});

var Comentarios = mongoose.model('Comentario', comentarioSchema);
console.log("se creo modelo comentario para las peliculas");
module.exports = Comentarios;