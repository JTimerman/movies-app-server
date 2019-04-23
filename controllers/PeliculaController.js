var peliculas = require('../models/Pelicula');
var bodyParser = require('body-parser');
var comentarios = require('../models/Comentario');

    
let getPeliculas = (res) =>
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
    console.log("llegue a leer con filtro");
    //Obtener id busqueda
    let idBusqueda = {nombre: req.body.peliculaBuscada};
    console.log(idBusqueda);
    //Listar resultados
    peliculas.find(idBusqueda)
    .then
    (
        (listaPeliculas)=>
        {
            res.send(listaPeliculas); //devuelvo resultado query   
            console.log(listaPeliculas);    
        },
        (err)=>{console.log(err);}
    )       
};

let updatePelicula = (nombre,promedio) => 
{
    let id = { nombre : nombre};
    let newPromedio = {promedio: promedio};
    console.log(id);
    console.log(newPromedio);
    peliculas.findOneAndUpdate(id,newPromedio,{new:true},function(err, todo)
    {
        (err)=>{console.log(err);}
        (newPromedio)=>
        {
            console.log(`promedio actualizado ${todo.promedio}`);
        };
    
    });
};





let updatePeliculaNewComment = (nombre,puntaje) => 
{
    let id = { nombre : nombre};
    let newPromedio = {promedio: promedio};       
    let CantidadVotos = {cantidadVotos: cantidadVotos};
    let newVotosTotales = {votosTotales: votosTotales};
    newVotosTotales = newVotosTotales + puntaje;
    CantidadVotos = CantidadVotos+1;
    newPromedio = newVotosTotales/votosTotales; 
    console.log(id);
    console.log(newPromedio);
    console.log(newVotosTotales);
    console.log(newCantidadVotos);
    
    
    peliculas.findOneAndUpdate(id,newPromedio,CantidadVotos,newVotosTotales,function(err, todo)
    {
        (err)=>{console.log(err);}
        (newPromedio)=>
        {
            console.log(`promedio actualizado ${todo.promedio}`);
        };
    
    });
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





module.exports = {getPeliculas,getPeliculaById,updatePelicula,getComentariosPelicula,updatePeliculaNewComment};