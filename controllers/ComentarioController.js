var comentario = require('../models/Comentario');
var bodyParser = require('body-parser');
var peliculas = require('../models/Pelicula');
var peliculaController=require('../controllers/PeliculaController');
var users=require('../models/Usuario');

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

    users.find({nombreUsuario:req.body.comentario.nombreUsuario})
    .then(
        (usuarioEncontrado)=>{

            usuarioEncontrado.forEach((element)=>{
            email=element.email;


            })

            
            var newComentario = comentario({
                comentario:req.body.comentario.comentario,
                puntaje:req.body.comentario.puntaje,
                nombreUsuario:req.body.comentario.nombreUsuario,
                idPelicula: req.body.pelicula.idPelicula,
                email:email,
                
                
            });

                            newComentario.save()
                            .then
                            (
                                
                                (comentario)=>{
                                    console.log('guarde el comentario');
                                    
                                

                                },(err)=>{console.log(err);}


                            )



                                }


     )
    

    let busqueda=({idPelicula:req.body.pelicula.idPelicula});
   
    peliculas.find(busqueda)
    .then
    (
        (peliculaEncontrada)=>
        {
         
            if(peliculaEncontrada.length==0){
                
                peliculaController.setPelicula(req.body.pelicula,(newPelicula)=>{
                    peliculaController.updatePeliculaNewComment(req.body.comentario.idPelicula,req.body.comentario.puntaje);
                    res.send(peliculaEncontrada); 
                });

                
                
                
            }
            else{

                peliculaController.updatePeliculaNewComment(req.body.comentario.idPelicula,req.body.comentario.puntaje); 
                res.send(peliculaEncontrada);
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