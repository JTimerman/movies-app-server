var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombreUsuario:String,
    email:String,
    clave:String,
    id:String
});

var Usuarios = mongoose.model('Voto', usuarioSchema);
console.log("se creo modelo");
module.exports = Usuarios;