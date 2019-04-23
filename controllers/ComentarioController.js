var comentario = require('../models/Comentario');
var bodyParser = require('body-parser');
var peliculaController=require ('../controllers/peliculaController');
    
let getComentarios = (req, res) =>
{      
   // console.log("llegue a leer");
    //Listar resultados
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
        pelicula: req.body.pelicula,
        
    });
    newComentario.save().
    then
    (
        (newComentario)=>
        {
            //res.send(newVoto); //devuelvo resultado query 
           // getVotosEquipo(req.body.nombre); 
           peliculaController.updatePeliculaNewComment(req.body.pelicula,req.body.puntaje);   
        },
        (err)=>{console.log(err);}
    ) 
}


module.exports = {getComentarios,setComentario};