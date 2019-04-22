var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var votoSchema = new Schema({
    nombreEquipo:String,
    diseño:Number,
    usabilidad: Number,
    aspecto:Number,
    funcionalidad:Number,
    innovacion:Number,
    promedio:Number,
    usuarioVoto: String
});

var Votos = mongoose.model('Voto', votoSchema);
console.log("se creo modelo");
module.exports = Votos;