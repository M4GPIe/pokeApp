
import PokedexLayout from "./pokedex/layout/PokedexLayout"
import PokedexGrid from "./pokedex/pages/AllPokemons"
import FavouriteGrid from "./pokedex/pages/FavouritePokemons"
import usePokemonsStore from "./pokedex/hooks/usePokemonsStore"


const PokeApp = () => {

  const {seeFavourites} = usePokemonsStore()

  return (
      <PokedexLayout>
        {
          seeFavourites
            ?<FavouriteGrid/>
            :<PokedexGrid/>
        }
      </PokedexLayout>
  )
}

export default PokeApp
