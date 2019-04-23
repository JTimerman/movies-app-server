var comentario = require('../models/Comentario');
var bodyParser = require('body-parser');
var peliculaController=require ('../controllers/peliculaController');
    
let getComentarios = (req, res) =>
{      
   
    comentario.find()
    .then
    (
        (listaComentarios)=>
        {
            res.send(listaComentarios); //devuelvo resultado query   
            //console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};



let setComentario = (req,res) =>
{
   // console.log(req.body);
    var newComentario = comentario({
        comentario:req.body.comentario,
        puntaje:req.body.puntaje,
        nombreUsuario:req.body.nombreUsuario,
        nombrePelicula: req.body.nombrePelicula,
        
    });
    newComentario.save().
    then
    (
        (newComentario)=>
        {
            
           
           peliculaController.updatePeliculaNewComment(req.body.nombrePelicula,req.body.puntaje);   
        },
        (err)=>{console.log(err);}
    ) 
}


module.exports = {getComentarios,setComentario};