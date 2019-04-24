var comentario = require('../models/Comentario');
var bodyParser = require('body-parser');
var peliculas = require('../models/Pelicula');



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
   
    var newComentario = comentario({
        comentario:req.body.comentarios.comentario,
        puntaje:req.body.comentarios.puntaje,
        nombreUsuario:req.body.comentarios.nombreUsuario,
        idPelicula: req.body.comentarios.idPelicula,
        
    });

    peliculas.find(busqueda)
    .then
    (
        (peliculaEncontrada)=>
        {
         
            if(peliculaEncontrada.length==0){
                console.log(req.pelicula);
                peliculas.setPelicula(req.pelicula).then(
                    (pelicula)=>{

                        newComentario.save().then(
                        
                            (comentario)=>{

                                peliculas.updatePeliculaNewComment(req.body.idPelicula,req.body.puntaje);

                            },(err)=>{console.log(err);}


                        )

                    },(err)=>{console.log(err);}
                   

                )
                

            }
            else{

                pelicula.updatePeliculaNewComment(req.body.idPelicula,req.body.puntaje);  
                newComentario.save() 
            }


        },(err)=>{console.log(err);}


    )

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