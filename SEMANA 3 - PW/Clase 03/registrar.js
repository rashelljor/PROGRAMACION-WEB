function registrar() {
    var nombre = document.getElementById("nombrecompleto").value;
    var vivo = document.getElementById("vivo").checked;
    var estado = document.getElementById("estado");

    if (vivo === true) {
        estado.textContent = nombre + " está vivo.";
    } else {
        estado.textContent = nombre.toUpperCase() + " estiró la pata.";
    }
} 