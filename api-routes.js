// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/PeliculaController');
let comentarioController = require('./controllers/ComentarioController');
       
    

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
router.get('/getPeliculas',function(req,res)
{
    console.log("getPeliculas");
    apiController.getPeliculas(req,res);
});
//EndPoint para leer peliculas por nombre
router.post('/getPeliculasById/?id',function(req,res)
{
    console.log("getPelicula con filtro");
    apiController.getPeliculaById(req,res);
});
//EndPoint para insertar comentario
router.post('/insertComentario/Comentario',function(req,res)
{
    console.log(req.body);
    votoController.insertComentario(req,res);
});

//EndPoint para leer peliculas comentadas por usuario
router.post('/getPeliculasbyUsuario/idUsuario',function(req,res)
{
    console.log(req.body);
    comentarioController.getComentariosByUsuario(req,res);
});

// Export API routes
module.exports = router;