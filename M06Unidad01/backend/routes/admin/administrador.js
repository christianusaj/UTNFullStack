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


module.exports = router;