function algo() {
    alert("Hola mundo");
}

function suma() {
    var primero = document.getElementById("num1").value;
    var segundo = document.getElementById("num2").value;
    var respuesta = document.getElementById("resultado");

    var sumas = parseFloat(primero) + parseFloat(segundo);
    respuesta.textContent = sumas;
}