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

let getComentariosPelicula = (pelicula)=>
{
    let idBusqueda = {nombrePelicula : pelicula};
    //Listar resultados
    comentarios.find(idBusqueda)
    .then
    (
        (listaPeliculas)=>
        {
            let total=0;
            let cant=0;
            listaPeliculas.forEach((element)=>{
               
                total = parseFloat(total) + parseFloat(element.promedio);
                cant= cant +1;
            })
            let newPromedio = parseFloat(total)  /parseFloat(cant);
            //console.log(`suma ${total} cant ${cant} promedio ${newPromedio}`);    
            equipos.updatePelicula(pelicula,newPromedio);
        },
        (err)=>{console.log(err);}
    )   
};





module.exports = {getPeliculas,getComentariosPelicula,updatePeliculaNewComment,getPeliculaByName};