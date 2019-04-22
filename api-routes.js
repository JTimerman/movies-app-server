// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/EquipoController');
let votoController = require('./controllers/VotoController');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para leer toda la base
router.get('/getEquipos',function(req,res)
{
    console.log("getEquipos");
    apiController.getEquipos(req,res);
});
//EndPoint para leer equipos por nombre
router.post('/getEquipoById/?id',function(req,res)
{
    console.log("getEquipo con filtro");
    apiController.getEquipoById(req,res);
});
//EndPoint para insertar votacion
router.post('/insertVotacion/Voto',function(req,res)
{
    console.log(req.body);
    votoController.insertVoto(req,res);
});

//EndPoint para leer equipos votados por usuario
router.post('/getEquiposByUsuario/idUsuario',function(req,res)
{
    console.log(req.body);
    votoController.getVotosByUsuario(req,res);
});

// Export API routes
module.exports = router;