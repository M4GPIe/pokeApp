
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {  Grid, IconButton, Stack, Typography } from '@mui/material'
import usePokemonsStore from '../hooks/usePokemonsStore';
import { pokemon } from '../../types/pokemon';

declare interface AppProps {
    pokemon : pokemon,
};

const PokemonCard : React.FC<AppProps> = ({pokemon}) => {

    const {favouritePokemons , addToFavourite, deleteFromFavourite } = usePokemonsStore()

    const fav = favouritePokemons.map(fp => fp.id).includes(pokemon.id)

    const favButton = (fav : boolean) => {
        if(fav){
            return(
                <IconButton onClick={()=>deleteFromFavourite(pokemon.id)}>
                    <StarIcon sx={{
                        color: '#b7410e'
                    }}/>
                </IconButton>
            )
        }else{
            return(
                <IconButton onClick={()=>addToFavourite(pokemon)}>
                    <StarBorderIcon sx={{
                        color: '#b7410e'
                    }}/>
                </IconButton>
            )
        }
    }

    return (
        <Grid container sx={{
            borderRadius: 5,
            backgroundColor: 'rgba(255, 248, 220, 0.6)',
            px: 2,
            pt: 2,
            justifyContent: 'space-between',
            height: 175
        }}>
            <Grid item xs={4}>
                <img src={pokemon.sprites.front_default} style={{width: 100, borderRadius: 100, backgroundColor: '#f5f3ed'}}/>
            </Grid>

            <Grid item xs={4}>
                <Typography>Name: </Typography>
                <Typography variant='subtitle2' fontWeight={'bold'}>{pokemon.name}</Typography>
                <Typography>Types: </Typography>
                {
                    pokemon.types.map(t => (
                        <Stack key={t.slot} direction={'row'} sx={{mt:0.5}}>
                            <Typography variant='subtitle2' fontWeight={'bold'} sx={{mr: 2,}}>{t.type.name}</Typography>
                            <img src={`/src/assets/120px-Battrio_${t.type.name}_type.png`} style={{width: 15}}/>
                        </Stack>
                    ))
                }
            </Grid>


            <Grid item xs={4} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography>Weigth</Typography>
                    <Typography variant='subtitle2' fontWeight={'bold'}>{pokemon.weight}</Typography>
                    <Typography>Height</Typography>
                    <Typography variant='subtitle2' fontWeight={'bold'}>{pokemon.height}</Typography>
            </Grid>
            <Grid container justifyContent={'end'}>
                {favButton(fav)}
            </Grid>
        </Grid>
    )
}

export default PokemonCard
