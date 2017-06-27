var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};
       
var $lista = $("#lista");

var plantilla = '<li>' + '--nombre--' + ' ' + '--apellidoP--' + ' ' + '--apellidoM--' + '<input type="checkbox">' + '</li>';

function mostrarLista(alumna){
    var platillaFinal = " ";
    
    var nombre = alumna.name;
    var apellidoP = alumna.pLastName;
    var apellidoM = alumna.mLastName;
    
    platillaFinal += plantilla
        .replace('--nombre--',nombre)
        .replace('--apellidoP--',apellidoP)
        .replace('--apellidoM--',apellidoM)
    
    $lista.prepend(platillaFinal);
} 

var cargarPagina= function(){
    cargarLista();
}

function cargarLista(){
    $.getJSON(api.url,function(alumnas){
        alumnas.forEach(mostrarLista)
    });
}


$(document).ready(cargarPagina);


    