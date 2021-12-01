var pool=require('./bd');

async function getNoticias(){
        var query ='select * from noticias';
        var rows=await pool.query(query);
        return rows;
        //console.log("Prueba");
}

module.exports={getNoticias}