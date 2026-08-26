const BASE_URL = "https://digi-api.com/api/v1";
async function buscarDigimon() {
    const digimonInput = document.getElementById('digimonInput');
    const nombreDigimon = digimonInput.value.toLowerCase().trim();
    document.getElementById("resultado").innerHTML = `
    <p>Buscando información...</p> `;

    try {
        const respuesta = await fetch(`${BASE_URL}/digimon/` + nombreDigimon);
        const digimon = await respuesta.json();
        mostrarDigimon(digimon);
    }
    catch (error) {
        console.error("Error al buscar el digimon:", error);
        document.getElementById("resultado").innerHTML = "<p>Error al buscar el digimon.</p>";
    }
}
async function obtenerDigimonAleatorio() {
    document.getElementById("resultado").innerHTML = `
    <p>Buscando información...</p> `;

    try {
        const idAleatorio = Math.floor(Math.random() * 1300) + 1;
        const respuesta = await fetch(`${BASE_URL}/digimon/` + idAleatorio);
        const digimon = await respuesta.json();
        mostrarDigimon(digimon);
    }
    catch (error) {
        console.error("Error al buscar el digimon:", error);
        document.getElementById("resultado").innerHTML = "<p>Error al buscar el digimon.</p>";
    }
}
function mostrarDigimon(digimon) {
    document.getElementById("resultado").innerHTML = `
    <h2>${digimon.name.toUpperCase()}</h2>
    <img src="${digimon.images[0].href}" width="200">
    <p><strong>ID:</strong> ${digimon.id}</p>
    <p><strong>X-Antibody:</strong> ${digimon.xAntibody ? "Sí" : "No"}</p>
    <p><strong>Niveles:</strong> ${digimon.levels.map(l => l.level).join(", ")}</p>
    <p><strong>Tipos:</strong> ${digimon.types.map(t => t.type).join(", ")}</p>
    <p><strong>Atributos:</strong> ${digimon.attributes.map(a => a.attribute).join(", ")}</p>
    <p><strong>Campos:</strong> ${digimon.fields.map(f => f.field).join(", ")}</p>
    <p><strong>Fecha de lanzamiento:</strong> ${digimon.releaseDate}</p>
    <p><strong>Habilidades:</strong> ${digimon.skills.map(s => s.skill).join(", ")}</p>
    `;
}