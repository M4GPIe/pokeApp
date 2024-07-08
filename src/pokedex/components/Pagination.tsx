
import { Grid, Typography, Button, Stack } from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import usePokemonsStore from '../hooks/usePokemonsStore';

const Pagination = () => {

    const {
        loading,

        nextPage, 
        prevPage, 
        page, 
        
        nextFavPage, 
        prevFavPage, 
        favPage, 
        favouritePokemons, 
        
        seeFavourites} = usePokemonsStore()

    //las paginaciones de los favoritos y de todos los pokemons son independientes

    const handleNextPage = ()=>{
        seeFavourites
            ?nextFavPage()
            :nextPage()
    }

    const handlePrevPage = ()=>{
        seeFavourites
            ?prevFavPage()
            :prevPage()
    }

    /*
    * Si esta cargando se desactiva
    * En el caso de los favoritos si estamos en la ultima pagina inhabilitamos el boton de siguiente
    * En el caso de todos los pokemons lo mismo pero con el total de pokemos
    */

    const disableNextButton = ()=>{

        if(loading) return true

        let disable = false

        if(seeFavourites){
            favouritePokemons.length % 12 === 0 
            ? disable = favPage >= Math.floor(favouritePokemons.length / 12)-1
            : disable = favPage >= Math.floor(favouritePokemons.length / 12)
        }else{
            disable = page >= Math.floor(1302 / 12)
        }

        return disable
    }

    const disablePrevButton = ()=>{
        return loading || seeFavourites? favPage===0 : page===0
    }

    return (
        <Stack sx={{direction: 'row', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Button disabled={disablePrevButton()} onClick={handlePrevPage} variant='contained' sx={{
                backgroundColor: '#8b4513', 
                '&:hover': {
                    backgroundColor: '#fff8dc',
                    color: '#8b4513'
                }
            }}>
                <ArrowCircleLeftIcon />
                <Typography display={{xs: 'none' , md: 'block'}} sx={{ml: 1}}>PREV PAGE</Typography>
            </Button>

            <Typography variant='h4' sx={{mx: 2 }}>{seeFavourites? favPage : page}</Typography>

            <Button disabled={disableNextButton()} onClick={handleNextPage} variant='contained' sx={{
                backgroundColor: '#8b4513', 
                '&:hover': {
                    backgroundColor: '#fff8dc',
                    color: '#8b4513'
                }
            }}>
                <Typography display={{xs: 'none' , md: 'block'}} sx={{mr: 1}}>NEXT PAGE</Typography>
                <ArrowCircleRightIcon/>
            </Button>
        </Stack>
    )
}

export default Pagination
