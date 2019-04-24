var comentario = require('../models/Comentario');
var bodyParser = require('body-parser');
var peliculaController=require ('../controllers/PeliculaController');
    
let getComentarios = (req, res) =>
{      
   let pelicula={idPelicula:req.body.idPelicula};
  
   console.log(req.body.nombrePelicula);
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
   // console.log(req.body);
    var newComentario = comentario({
        comentario:req.body.comentario.comentario,
        puntaje:req.body.comentario.puntaje,
        nombreUsuario:req.body.comentario.nombreUsuario,
        idPelicula: req.body.comentario.idPelicula,
        
    });
    let pelicula=({idPelicula:idPelicula})
    peliculaController.find(pelicula)
    .then(

        (peliculaEncontrada)=>{

            if(peliculaEncontrada.length==0){
                console.log(req.pelicula);
                peliculaController.setPelicula(req.pelicula).then(
                    (pelicula)=>{

                        newComentario.save().then(
                        
                            (comentario)=>{

                                peliculaController.updatePeliculaNewComment(req.body.idPelicula,req.body.puntaje);

                            },(err)=>{console.log(err);}


                        )

                    },(err)=>{console.log(err);}
                   

                )
                

            }
            else{

                peliculaController.updatePeliculaNewComment(req.body.idPelicula,req.body.puntaje);  
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