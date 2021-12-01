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

module.exports = router;