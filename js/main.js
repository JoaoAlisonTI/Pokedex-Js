const pokemonList = document.getElementById('pokemonsList');
const loadMoreButton = document.getElementById('loadMore')
const maxRecords = 151
/*151 = 1° geração de pokemons*/
const limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => 
    `<li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            
            <img src="${pokemon.photo}" alt="${pokemon.name}" />
          </div>
        </li>
    `).join('')
    pokemonsList.innerHTML += newHtml
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordNextPage = offset + limit
  
  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)
    
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
     loadPokemonItens(offset, limit)
  }
})