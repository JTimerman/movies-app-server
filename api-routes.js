// Initialize express router
let router = require('express').Router();

let usuarioController = require('./controllers/UsuariosController');
let peliculaController = require('./controllers/PeliculaController');
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

//-----------------USUARIOS-----------------------

router.get('/getUsuario',function(req,res)
{
    console.log("getUsuario");
    usuarioController.getUsuario(req,res);
});

//EndPoint para leer equipos por nombre
router.post('/usuarioExiste/usuarioBuscado',function(req,res)

{
    console.log("usuario existe verificacion");
    usuarioController.usuarioExiste(req,res);
});
//EndPoint para insertar comentario
router.post('/setUsuario/usuario',function(req,res)
{
   
    usuarioController.setUsuario(req,res);
});

//EndPoint para leer peliculas comentadas por usuario
router.post('/updateUsuario/usuario',function(req,res)
{
    console.log(req.body);
    usuarioController.updateUsuario(req,res);
});



//--------------------COMENTARIOS---------------------
router.get('/getComentarios',function(req,res)
{
    console.log("getComentarios");
    comentarioController.getComentarios(req,res);
});

router.post('/setComentario/comentario',function(req,res)
{
    console.log("setComentario");
    comentarioController.setComentario(req,res);
});



//EndPoint para leer peliculas comentadas por usuario
router.get('/getPeliculasbyUsuario/idUsuario',function(req,res)
{
    console.log(req.body);
    peliculaController.getComentariosByUsuario(req,res);
})

//EndPoint para leer todas las peliculas 
router.get('/getPeliculas',function(req,res)
{
    
    console.log(res.body);
    peliculaController.getPeliculas(req,res);
})

//EndPoint para leer todas las peliculas 
router.get('/getPeliculasByName/pelicula',function(req,res)
{
   
   // console.log(res.body);
    peliculaController.getPeliculaByName(req,res);
})

// Export API routes
module.exports = router;