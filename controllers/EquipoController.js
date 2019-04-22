var equipos = require('../models/Equipo');
var bodyParser = require('body-parser');

    
let getEquipos = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    equipos.find()
    .then
    (
        (listaEquipos)=>
        {
            res.send(listaEquipos); //devuelvo resultado query   
            //console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};

let getEquipoById = (req, res) =>
{      
    console.log("llegue a leer con filtro");
    //Obtener id busqueda
    let idBusqueda = {nombre: req.body.equipoBuscado};
    console.log(idBusqueda);
    //Listar resultados
    equipos.find(idBusqueda)
    .then
    (
        (listaEquipos)=>
        {
            res.send(listaEquipos); //devuelvo resultado query   
            console.log(listaEquipos);    
        },
        (err)=>{console.log(err);}
    )       
};



let updateEquipo = (nombre,promedio) => 
{
    let id = { nombre : nombre};
    let newPromedio = {promedio: promedio};
    console.log(id);
    console.log(newPromedio);
    equipos.findOneAndUpdate(id,newPromedio,{new:true},function(err, todo)
    {
        (err)=>{console.log(err);}
        (newPromedio)=>
        {
            console.log(`promedio actualizado ${todo.promedio}`);
        };
    
    });
}

module.exports = {getEquipos,getEquipoById,updateEquipo};