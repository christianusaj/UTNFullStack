var pool=require('./bd');

async function getNoticias(){
        var query ='select * from noticias';
        var rows=await pool.query(query);
        return rows;
        //console.log("Prueba");
}

async function insertarNoticia(obj){
    try{
        var query="insert into noticias set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    }
}

async function eliminarNoticia(id){
    var query= "delete from noticias where id_noticias=?";
    var rows = await pool.query(query, [id]);
    return rows;
}

/*Buscar el articulo para actualizar*/
async function getNoticiasById(id){
    var query ='select * from noticias where id_noticias =?';
    var rows =await pool.query(query,[id]);
    return rows[0];
}

/*Hace el update*/
async function modificarNoticias(obj,id){
    try {
        console.log(id);
        var query = 'update noticias set ? where id_noticias=?';
        var rows = await pool.query(query,[obj,id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports={getNoticias, insertarNoticia, eliminarNoticia, getNoticiasById, modificarNoticias }