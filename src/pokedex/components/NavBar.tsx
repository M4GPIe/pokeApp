import { AppBar, Toolbar, Grid, Typography, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import usePokemonsStore from '../hooks/usePokemonsStore';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

/*
 * el icono y texto del boton para cambiar de vista van en funcion de si estamos viendo todos los pokemons o solo los favoritos
 * seeFav indica si estamos viendo los favoritos o todos los pokemons, viene del state del store y regula los pokemons que muestra la pagina
 * toggleFav es una funcion que cambia el booleano seeFav en el state, 
 * toggleFav viene del customHook que implemente para tener todas las interacciones con el estado en el mismo sitio
*/

const favButton = (seeFav : boolean, toggleFav : ()=>void)=>{
    return(
        <Button onClick={toggleFav} variant='contained' sx={{
            alignItems: 'center', 
            backgroundColor: '#b7410e',
            '&:hover': {
                backgroundColor: '#fff8dc',
                color: '#b7410e'
            }
        }}>
            {
                seeFav
                    ? <CatchingPokemonIcon sx={{mr:1}}/>
                    : <StarIcon sx={{mr:1}}/>
            }
            <Typography variant='body2'>{seeFav ? 'All Pokemons' : 'Favourite'}</Typography>
        </Button>
    )
}

const NavBar = () => {

    const {
        
        seeFavourites, 
        changeSeeFavourites} = usePokemonsStore()

    return (
        <AppBar 
            position='fixed'
            sx={{
                backgroundColor: '#67872f',
                height: 65
            }}
        >
            <Toolbar>

                <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6' noWrap component={'div'} color={'#fff8dc'}>PokeApp</Typography>

                    <Grid item>
                        {favButton(seeFavourites, changeSeeFavourites)}
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar