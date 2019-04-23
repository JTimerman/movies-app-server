var peliculas = require('../models/Pelicula');
var bodyParser = require('body-parser');
var comentarios = require('../models/Comentario');

    
let getPeliculas = (req,res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    peliculas.find()
    .then
    (
        (listaPeliculas)=>
        {
            res.send(listaPeliculas); //devuelvo resultado query   
            //console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};

let getPeliculaByName = (req, res) =>
{      
    console.log(req.body.nombre);
   
    let nombrePelicula = {nombre: req.body.nombre};
    
    //Listar resultados
    peliculas.find(nombrePelicula)
    .then
    (
        (listaPeliculas)=>
        {   console.log(listaPeliculas);   
            res.send(listaPeliculas); //devuelvo resultado query   
             
        },
        (err)=>{console.log(err);}
    )       
};





let updatePeliculaNewComment = (nombrePelicula,puntaje) => 
{

    
    let busqueda = {nombre: nombrePelicula};

   
   console.log(busqueda);
   
    peliculas.find(busqueda)
    .then
    (
        (busquedaEncontrada)=>
        {
           let totalVotos=0;
           let totalPuntajeCalculado=0;
           let promedioTotal=0;
         busquedaEncontrada.forEach((element)=>{
            
            totalVotos=parseFloat(element.cantidadVotos)+1;
            totalPuntajeCalculado=parseFloat(element.totalPuntaje)+puntaje;
            promedioTotal=totalVotos/totalPuntajeCalculado;
            //console.log(totalVotos);
            //console.log(totalPuntajeCalculado);
            //console.log(promedioTotal);
            })
            
            peliculas.findOneAndUpdate({nombre:nombrePelicula},{cantidadVotos:totalVotos,totalPuntaje:totalPuntajeCalculado,promedio:promedioTotal})
            .then(
                    (updatePelicula)=>{

                    console.log('se actualizo pelicula');


                    },
                    (err)=>{console.log(err);}

            )
        },
        (err)=>{console.log(err);}
    )   
    
};


//busco la pelicula, si no existe la creo, si existe emito un error
let setPelicula = (req,res) =>
{

   
   //console.log('entre a set')
   //creo nueva pelicula
   var newPelicula = pelicula({
    nombre:req.body.nombre,
    promedio:req.body.promedio,
    cantidadVotos:req.body.cantidadVotos,
    totalPuntaje:req.body.totalPuntaje,
    idPelicula:req.body.idPelicula
    });

//verico que no exista la peli
    let busqueda = {nombre: req.body.nombre,promedio:req.body.promedio,cantidadVotos:req.body.cantidadVotos,totalPuntaje:req.body.totalPuntaje,idPelicula:req.body.idPelicula};
    
    peliculas.find(busqueda)
    .then
    (
        (peliculaBuscada)=>
        {
            if (peliculaBuscada.length==0)
            {
                newPelicula.save().
                then
                (
                    (newPelicula)=>
                    {
                        console.log(newPelicula);
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



module.exports = {getPeliculas,updatePeliculaNewComment,getPeliculaByName,setPelicula};