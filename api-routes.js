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
//testeado
router.post('/getUsuario/usuario',function(req,res)
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
    console.log("crear usuarios");
    usuarioController.setUsuario(req,res);
});

//testeado
router.post('/updateUsuario/usuario',function(req,res)
{
    console.log(req.body);
    usuarioController.updateUsuario(req,res);
});

//EndPoint para insertar pelicula. 
//testeado
router.post('/setPelicula/pelicula',function(req,res)
{
   
    peliculaController.setPelicula(req,res);
});


//--------------------COMENTARIOS---------------------
//testeado. hay que pasar el id por parametro
router.post('/getComentarios/pelicula',function(req,res)
{
    console.log("getComentarios");
    comentarioController.getComentarios(req,res);
});
//tested
router.post('/getComentariosByUser/usuario',function(req,res)

{
    console.log("getComentarioByUsuario");
    comentarioController.getComentariosByUser(req,res);
});

router.post('/setComentario/comentario',function(req,res)
{
    console.log("setComentario");
    comentarioController.setComentario(req,res);
});




//---------------PELICULAS------------------
//EndPoint para leer todas las peliculas 
//testeado
router.get('/getPeliculas',function(req,res)
{
    
    console.log(res.body);
    peliculaController.getPeliculas(req,res);
})

//EndPoint para leer todas las peliculas 
//testeado
router.post('/getPeliculasByName/pelicula',function(req,res)
{
   
   // console.log(res.body);
    peliculaController.getPeliculaByName(req,res);
})

//EndPoint para leer todas las peliculas 
//testeado
router.post('/getPeliculasById/id',function(req,res)
{
   
   // console.log(res.body);
    peliculaController.getPeliculaById(req,res);
})

// Export API routes
module.exports = router;