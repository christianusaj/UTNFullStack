var express = require('express');
var router = express.Router();
var administradorModel = require('../../models/administradorModel');


/* GET home page. */
router.get('/', async function(req, res, next) {
  var administrador=await administradorModel.getNoticias();

  res.render('admin/administrador', {
      layout:'admin/layout',
      usuario:req.session.nombre,
      administrador
  });
});


/*Formulario de agregar nueva entrada*/
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
})

/*Insertar entrada en bd*/
router.post('/agregar', async(req, res, next) =>{
  try {
    if (req.body.titulo != "" && req.body.contenido !="" && req.body.id_imagen !="") {
      await administradorModel.insertarNoticia(req.body);
      res.redirect('/admin/administrador')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error:true,
        message: 'Todos los campos requeridos'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error:true,
      message: 'No se cargo la nueva entrada'
    })
  }
})

/*Eliminar entrada*/
router.get('/eliminar/:id', async(req, res, next)=> {
  var id=req.params.id;
  await administradorModel.eliminarNoticia(id);
  res.redirect('/admin/administrador')
});


/*Traer para Modificar*/
router.get('/modificar/:id', async (req,res, next)=> {
  var id=req.params.id;
  console.log(req.params.id);
  var noticia=await administradorModel.getNoticiasById(id);
  console.log(req.params.id);
  res.render('admin/modificar',{
    layout: 'admin/layout',
    noticia
  })
});

router.post('/modificar', async(req, res, next) =>{
  try{
    var obj={
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      id_imagen: req.body.id_imagen
    }
    console.log(obj)
    await administradorModel.modificarNoticias(obj, req.body.id);
    res.redirect('/admin/administrador');
  } catch (error){
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la entrada'

    })
  }
})

module.exports = router;