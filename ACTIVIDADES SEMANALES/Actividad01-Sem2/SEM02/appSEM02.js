
    async function buscarPokemon() {        
    const pokemonInput = document.getElementById('pokemonInput');
    const nombrePokemon = pokemonInput.value.
    toLowerCase().
    trim();
    document.getElementById("resultado").innerHTML =`
    <p> Buscando información</p> `;

    try { 
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/`+nombrePokemon) 
        const pokemon = await respuesta.json();
        document.getElementById("resultado").innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2> 
        <h2>${pokemon.id}</h2>
        <h2>${pokemon.order}</h2>
        <img src="${pokemon.sprites.front_default}">
        `;
        
    }
    catch (error) {
        console.error("Error al buscar el pokemon:", error);
        document.getElementById("resultado").innerHTML = "<p>Error al buscar el pokemon.</p>";
    }
}