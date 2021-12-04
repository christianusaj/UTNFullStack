var express = require('express');
var router = express.Router();
var administradorModel = require('../../models/administradorModel');
var util=require('util');
var cloudinary = require('cloudinary').v2;
const uploader=util.promisify(cloudinary.uploader.upload);
const destroy=util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function(req, res, next) {
  var administrador=await administradorModel.getNoticias();

  administrador=administrador.map(noticiaArray=> {
    if (noticiaArray.id_imagen){
      const imagen=cloudinary.image(noticiaArray.id_imagen, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...noticiaArray,
        imagen
      }
    }else {
      return{
        ...noticiaArray,
        imagen:''
      }
    }
  });


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

    var id_imagen='';
    if(req.files && Object.keys(req.files).length>0) {
      imagen=req.files.id_imagen;
      id_imagen=(await uploader(imagen.tempFilePath)).
      public_id;
    }

    if (req.body.titulo != "" && req.body.contenido !="" && req.body.id_imagen !="") {
      await administradorModel.insertarNoticia({
        ...req.body, //titulo, contenido
        id_imagen
      });
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

  let noticia=await administradorModel.getNoticiasById;
  if(noticia.id_imagen){
    //ver con console.log
    await(destroy(noticia.id_imagen));    
  }


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

    let id_imagen=req.body.img_original;
    //let borrar_img_anterior=false;
    //parte que permite eliminar imagen
    //if (req.body.img_delete==="1"){
    //  img_id=null;
    //  borrar_img_anterior=true;
    //} else{
      if (req.files && Object.keys(req.files).length>0){
        imagen=req.files.id_imagen;
        id_imagen=(await uploader(imagen.tempFilePath)).public_id;
        borrar_img_anterior=true;
      }
    //}
    //if (borrar_img_anterior && req.body.img_original){
    if (req.body.img_original){
      await (destroy(req.body.img_original));
    }

    var obj={
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      //id_imagen: req.body.id_imagen   Previo a poner la linea de abajo
      id_imagen
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