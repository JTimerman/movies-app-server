var peliculas = require('../models/Pelicula');
var bodyParser = require('body-parser');

    
let getPeliculas = (req, res) =>
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
}

module.exports = {getPeliculas,getPeliculaById,updatePelicula};