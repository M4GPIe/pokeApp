# PokeApp

## componentes de la aplicacion
Navbar:
  A la izquierda: logo pokemon

  A la derecha
  - Boton de ver todos
  - Boton de ver favoritos
  - Boton de filtrar por tipo

Loading: popup con animacion de carga cuando esta haciendo fetching de los pokemons (sweetalert?)

PokedexGrid: tabla con las cartas en miniatura de los pokemons y los botones de pasar pagina y esas weas

PokedexItem: cajita pequeña con la foto del pokemon, numero, nombre, tipos y arriba a la izquierda fav

PokemonCard: carta ampliada del pokemon 
  arriba el nombre, numero y si es favorito
  izquierda la foto
  derecha en una cajita peso, altura, categoria, sexo y habilidad
  abajo los tipos 
  abajo del todo las flechas de anterior y siguiente

## estado de la aplicacion


reducer pokemons: controla el estado de los pokemons
  state: {
    selectedPokemon: {} or null
    pokemons: [{...}] or []
    favouritePokemons: [{...}] or []
    page: number
    loading: true or false
  }

  actions:
    setPokemons: inicializa pokemons y loading = false
    setLoading: loading = true
    addFavourite: añade un pokemon a favoritos
    deleteFavourite: elimina de favoritos
    setSelectedPokemon
    setPage: cambia la pagina
  
  thunks: 
    startFetchingPokemons:
      recibe la pagina que tiene que cargar y actualiza el numero de pagina
      hace la peticion a la api con axios
      cuando acaba hace dispatch de setPokemons

## hooks y helpers

  pokemon api: 
    API con axios para hacer las peticiones

    loadPage: mira si la pagina esta en el local storage, si esta hace el setPokemons con esos
      si no esta hace startFetchingPokemons

  useUiStore y useCalendarStore: custom hooks con el acceso a los estados y su modificacion
  