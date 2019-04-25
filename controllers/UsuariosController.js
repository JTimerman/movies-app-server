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

function usuarioExiste (req,res)
{      
    let busqueda = {nombreUsuario: req.body.nombreUsuario,clave:req.body.clave};
    
    usuario.find(busqueda)
    .then
    (
        (usuarioBuscado)=>
        {
            
            console.log('existe');
            
            
            
        },
        (err)=>{console.log(err)}
    )       
};


//busco el usuario si no existo lo creo si existe emito un error
let setUsuario = (req,res) =>
{


   //console.log('entre a setusuario')
   //creo nuevo usuario
   var newUsuario = usuario({
    nombreUsuario:req.body.nombreUsuario,
    email:req.body.email,
    clave:req.body.clave
    });

//verico que no exista el usuario
    let busqueda = {nombreUsuario: req.body.nombreUsuario,clave:req.body.clave};
    
    usuario.find(busqueda)
    .then
    (
        (usuarioBuscado)=>
        {
            if (usuarioBuscado.length==0)
            {
                newUsuario.save().
                then
                (
                    (newUsuario)=>
                    {
                        console.log(newUsuario);
                        res.send(true);
                    },
                    (err)=>{console.log(err);
                    }
                ) 
            }   
            else{

                res.send(false);
            }   
        },
        (err)=>{console.log(err)}
    );      

}

let updateUsuario = (req, res) =>
{      
    let busqueda = ({nombreUsuario: req.body.nombreUsuario},{clave:req.body.clave});

    usuario.findOneAndUpdate(busqueda)
    .then
    (
        (usuarioBuscado)=>
        {
            
          console.log(usuarioBuscado);
             
             
        },
        (err)=>{console.log(err);}
    )       
};








module.exports = {getUsuario,setUsuario,updateUsuario,usuarioExiste};