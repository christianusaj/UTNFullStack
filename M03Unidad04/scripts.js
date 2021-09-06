/*cambio de color*/
let color;
function cambiarColor(color){
    let colorDiv= document.getElementById('exterior');
    colorDiv.style.backgroundColor=color;
}

/*contador de caracteres*/
let letras=document.getElementById("contador");
letras.addEventListener("keyup",function()
{
    let numero=letras.value;
    document.getElementById('cantidadLetras').innerHTML=numero.length;
});

let alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];


// Evaluar notas
let txt=""
alumnos.forEach(revisarNotas);
document.getElementById('divAprobados').innerHTML=txt;

function revisarNotas(value, index, array){
    if (array[index].nota>=7){
        
        txt+='<p>Nombre: '+array[index].nombre+'<br>Nota: '+array[index].nota+'</p>';
        
    }
};
