var pool=require('./bd');
var md5=require('md5');

async function getUserByUsernameAndPassword(user, password){
    try {
        var query ='select * from usuarios where usuario=? and password=? limit 1';
        var rows=await pool.query(query,[user,password]);
        return rows[0];
        console.log("Prueba");

    } catch(error){
        console.log(error);
        console.log("errores");
    }
}

module.exports={getUserByUsernameAndPassword}