function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typesSlot) => `<li class="type">${typesSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
          </div>
        </li>
  `
}

const pokemonList = document.getElementById('pokemonsList');

pokeApi.getPokemons().then((pokemons = []) => {
    
    pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})