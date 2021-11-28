var express = require('express');
var router = express.Router();
var usuariosModel =require('../../models/usuariosModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout:'admin/layout'
  });
});

/*logout*/
router.get('/logout', function(req, res, next){
    req.session.destroy(); //destruye variable de sesion
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});


router.post('/', async(req, res, next)=> {
    try {
        var usuario=req.body.usuario;
        var password=req.body.password;

        console.log(req.body);

        var data=await usuariosModel.getUserByUsernameAndPassword(usuario, password);

        console.log("pruebas")
        if(data != undefined){
            req.session.id_usuario=data.id; //datos de sesion
            req.session.nombre=data.usuario;
            res.redirect('administrador');
        } else{
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error){
        console.log(error);
    }
})

module.exports = router;
