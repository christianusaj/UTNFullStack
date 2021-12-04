var express = require('express');
var router=express.Router();
var administradorModel=require('./../models/administradorModel');
var cloudinary=require('cloudinary').v2;


router.get('/administrador', async function(req, res, next){
    var administrador=await administradorModel.getNoticias();

    administrador=administrador.map(administrador=> {
      if (administrador.id_imagen){
        const imagen=cloudinary.image(administrador.id_imagen, {
          width: 100,
          height: 100,
          crop: 'fill'
        });
        return {
          ...administrador,
          imagen
        }
      }else {
        return{
          ...administrador,
          imagen:''
        }
      }
    });
    res.json(administrador);
});
module.exports=router;