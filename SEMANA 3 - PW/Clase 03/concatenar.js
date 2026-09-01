function concatenar() {
    var apodo = document.getElementById("nombre").value;
    var chapa = document.getElementById("apellido").value;

    var respuesta = document.getElementById("concatenar");

    var completo = apodo + ", " + chapa.toUpperCase();
    respuesta.textContent = completo;
}