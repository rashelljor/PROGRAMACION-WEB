var tabla = document.getElementById("tabla");
var btnfila = document.getElementById("btnfila");
var btncolumna = document.getElementById("btncolumna");

document.addEventListener("contextmenu", function() {
    event.preventDefault();
    alert("Click derecho deshabilitado");
})

document.addEventListener("selectstart", function() {
    event.preventDefault();
})

btnfila.addEventListener("click", function() {
    var fila = tabla.insertRow();
    var columna = tabla.rows[0].cells.length;

    for (var i= 0; i < columna; i++) {
        var celdas = fila.insertCell(i);
        celdas.textContent = "Nueva celda";        
        
}
})

btncolumna.addEventListener("click", function() {

    for (var fila of tabla.rows) {
        var celdas = fila.insertCell();
        celdas.textContent = "Nueva celda";        
        
}
})