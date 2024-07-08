import { Grid, Typography,  } from "@mui/material"
import usePokemonsStore from "../hooks/usePokemonsStore"
import PokemonGrid from "../components/PokemonGrid"

const FavouriteGrid = () => {

    const {favPage , favouritePokemons , prevFavPage} = usePokemonsStore()

    //sacamos los pokemons paginados de 12 en 12 de la lista de favoritos 

    const pokemons = favouritePokemons.slice( 12*favPage , Math.min(favouritePokemons.length , 12*favPage + 12) )    

    //si no hay pokemons favoritos

    if(pokemons.length === 0){

        if(favouritePokemons.length>0){ prevFavPage() }
        
        return(
            <Grid container sx={{
                backgroundColor: 'rgba(255, 248, 220, 0.85)',
                borderRadius: 10,
                padding: 3,
                alignItems: 'center',
            }}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant="h4" display={'flex'} justifyContent={'center'} alignItems={'center'}>Currently no Pokemons...</Typography>

                    
                </Grid>
            </Grid>
        )
    }

    return (
        <PokemonGrid title="Favourite Pokemons" pokemons={pokemons} />
    )
}

export default FavouriteGrid
