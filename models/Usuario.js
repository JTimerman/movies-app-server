var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema;

var usuarioSchema = new usuarioSchema({
    nombreUsuario:String,
    email:String,
    clave:String
});

var Usuarios = mongoose.model('Usuario', usuarioSchema);
console.log("se creo modelo");
module.exports = Usuarios;