var comentario = require('../models/Comentario');
var bodyParser = require('body-parser');
var peliculas = require('../models/Pelicula');
var peliculaController=require('../controllers/PeliculaController');


let getComentarios = (req, res) =>
{      
   let pelicula={idPelicula:req.body.idPelicula};


    
   //console.log(req.body.nombrePelicula);
    comentario.find(pelicula)
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


    

    let busqueda=({idPelicula:req.body.pelicula.idPelicula});
   //console.log(req.body.pelicula);
    var newComentario = comentario({
        comentario:req.body.comentarios.comentario,
        puntaje:req.body.comentarios.puntaje,
        nombreUsuario:req.body.comentarios.nombreUsuario,
        idPelicula: req.body.comentarios.idPelicula,
        
        
    });

    newComentario.save()
    .then
    (
        
        (comentario)=>{
            console.log('guarde el comentario');
            
           // peliculaController.updatePeliculaNewComment(req.body.comentarios.idPelicula,req.body.comentarios.puntaje);

        },(err)=>{console.log(err);}


    )

    peliculas.find(busqueda)
    .then
    (
        (peliculaEncontrada)=>
        {
         
            if(peliculaEncontrada.length==0){
                
                peliculaController.setPelicula(req.body.pelicula,res).then(

                    peliculaController.updatePeliculaNewComment(req.body.comentarios.idPelicula,req.body.comentarios.puntaje)

                )
                 
                
                
            }
            else{

                peliculaController.updatePeliculaNewComment(req.body.comentarios.idPelicula,req.body.comentarios.puntaje); 
            }
          

        },(err)=>{console.log(err);}


    );
    
}



let getComentariosByUser = (req, res) =>
{      
   let usuario={nombreUsuario:req.body.nombreUsuario};
  
   console.log(usuario);
    comentario.find(usuario)
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






module.exports = {getComentarios,setComentario,getComentariosByUser};