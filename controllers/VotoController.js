var votos = require('../models/Voto');
var bodyParser = require('body-parser');
//var equipos = require('./EquipoController');

let insertVoto = (req,res) =>
{
   // console.log(req.body);
    var newVoto = votos({
        nombreEquipo:req.body.nombre,
        diseño:req.body.diseño,
        usabilidad: req.body.usabilidad,
        aspecto:req.body.aspecto,
        funcionalidad:req.body.funcionalidad,
        innovacion:req.body.innovacion,
        promedio:req.body.promedio,
        usuarioVoto: req.body.usuario
    });
    newVoto.save().
    then
    (
        (newVoto)=>
        {
            //res.send(newVoto); //devuelvo resultado query 
            getVotosEquipo(req.body.nombre);      
        },
        (err)=>{console.log(err);}
    ) 
}

let getVotosEquipo = (equipo)=>
{
    let idBusqueda = {idPelicula : equipo};
    //Listar resultados
    votos.find(idBusqueda)
    .then
    (
        (listaEquipos)=>
        {
            let total=0;
            let cant=0;
            listaEquipos.forEach((element)=>{
               
                total = parseFloat(total) + parseFloat(element.promedio);
                cant= cant +1;
            })
            let newPromedio = parseFloat(total)  /parseFloat(cant);
            //console.log(`suma ${total} cant ${cant} promedio ${newPromedio}`);    
            equipos.updateEquipo(equipo,newPromedio);
        },
        (err)=>{console.log(err);}
    )   
};
let getVotosByUsuario = (req, res) =>
{      
    console.log("llegue a leer votos con filtro");
    //Obtener id busqueda
    let idBusqueda = {usuarioVoto: req.body.usuarioVoto};
    console.log(idBusqueda);
    //Listar resultados
    votos.find(idBusqueda)
    .then
    (
        (listaVotos)=>
        {
            res.send(listaVotos); //devuelvo resultado query   
            console.log(listaVotos);    
        },
        (err)=>{console.log(err);}
    )       
};

module.exports = {insertVoto,getVotosEquipo,getVotosByUsuario};