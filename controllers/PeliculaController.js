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

let getPeliculaById = (req, res) =>
{      
    console.log(req.body.nombre);
   
    let nombrePelicula = {idPelicula: req.body.idPelicula};
    
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





let updatePeliculaNewComment = (idPelicula,puntaje) => 
{

    console.log("id PELICULA=",idPelicula);
    console.log("PUNTAJE COMENTARIO=",puntaje);
   

   
   //console.log(busqueda);
   
    peliculas.find({idPelicula: idPelicula})
    .then
    (
        (busquedaEncontrada)=>
        {
           let totalVotos=0;
           let totalPuntajeCalculado=0;
           let promedioTotal=0;
           console.log(busquedaEncontrada);
            busquedaEncontrada.forEach((element)=>{
            
            totalVotos=parseFloat(element.cantidadVotos)+1;
            totalPuntajeCalculado=parseFloat(element.totalPuntaje)+puntaje;
            promedioTotal=totalPuntajeCalculado/totalVotos;
            console.log("total votos de la pelicula",totalVotos);
            console.log("total puntaje calculado",totalPuntajeCalculado);
            console.log("promedio total",promedioTotal);

            })
            peliculas.findOneAndUpdate({idPelicula:idPelicula},{cantidadVotos:totalVotos,totalPuntaje:totalPuntajeCalculado,promedio:promedioTotal})
            .then
            (
                    (updatePelicula)=>{

                         console.log('se actualizo pelicula');
                        console.log("PELICULA UPDATE",updatePelicula);
                        

                    },
                    (err)=>{console.log(err);}

            )
                  
                

            
            
           
        },
        (err)=>{console.log(err);}
    ) 
    
    


    
};


//busco la pelicula, si no existe la creo, si existe emito un error
let setPelicula = (pelicula,callback) =>
{
   
   var newPelicula = peliculas({
    nombre:pelicula.nombre,
    promedio:0,
    cantidadVotos:0,
    totalPuntaje:0,
    idPelicula:pelicula.idPelicula,
    imagen:""
    });
//console.log(newPelicula);
//verico que no exista la peli
    //let busqueda = {nombre: req.body.nombre,promedio:req.body.promedio,cantidadVotos:req.body.cantidadVotos,totalPuntaje:req.body.totalPuntaje,idPelicula:req.body.idPelicula};
    let busqueda = {idPelicula:pelicula.idPelicula};
    console.log(busqueda);
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
                        callback(newPelicula);
                    },
                    (err)=>{console.log(err);
                    }
                ) 
            }   
             
        },
        (err)=>{console.log(err)}
    );      

}




module.exports = {getPeliculas,updatePeliculaNewComment,getPeliculaById,getPeliculaByName,setPelicula};

