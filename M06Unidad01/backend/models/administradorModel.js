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
module.exports={getNoticias, insertarNoticia }