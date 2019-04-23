var usuario = require('../models/Usuario');
var bodyParser = require('body-parser');

    
let getUsuario = (req, res) =>
{      
    let busqueda = {nombreUsuario: req.body.nombreUsuario,clave:req.body.clave};
    
    usuario.find(busqueda)
    .then
    (
        (usuarioBuscado)=>
        {
            res.send(usuarioBuscado); //devuelvo resultado query   
            //console.log(usuarioBuscado);
             
        },
        (err)=>{console.log(err);}
    )       
};

let usuarioExiste = (req, res) =>
{      
    let busqueda = {nombreUsuario: req.body.nombreUsuario,clave:req.body.clave};
    
    usuario.find(busqueda)
    .then
    (
        (usuarioBuscado)=>
        {
            return true;
             
        },
        (err)=>{return false;}
    )       
};
//busco el usuario si no existo lo creo si existe emito un error

let setUsuario = (req,res) =>
{

   
let usuarioExiste=usuarioExiste(req,res);

   // console.log(req.body);
    var newUsuario = Usuario({
        nombreUsuario:req.body.nombreUsuario,
        email:req.body.email,
        clave:req.body.clave,
       
        
    });
    newUsuario.save().
    then
    (
        (newUsuario)=>
        {
            
          
        },
        (err)=>{console.log(err);}
    ) 
}

let updateUsuario = (req, res) =>
{      
    let busqueda = {nombreUsuario: req.body.nombreUsuario,clave:req.body.clave};
    let busquedaClave={clave:req.body.clave};
    usuario.find(busqueda)
    .then
    (
        (usuarioBuscado)=>
        {
            
            usuario.findOneAndUpdate(busquedaClave);
            //res.send(usuarioBuscado); //devuelvo resultado query   
             
        },
        (err)=>{console.log(err);}
    )       
};








module.exports = {getUsuario,setUsuario,updateUsuario};