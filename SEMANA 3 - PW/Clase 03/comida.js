function comida() {
    var comidas = ["desayuno", "almuerzo", "cena", "merienda", "snack"];
    var valor = document.getElementById("valor").value;

    document.getElementById("comida").innerHTML = comidas[valor];
}