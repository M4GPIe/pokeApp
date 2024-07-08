import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pokemon } from '../../types/pokemon'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'

interface Props {
    title: string,
    pokemons: pokemon[]
}

const PokemonGrid : React.FC<Props> = ({title , pokemons}) => {
  return (
    <Grid container spacing={2} sx={{
        backgroundColor: 'rgba(255, 248, 220, 0.75)',
        borderRadius: 10,
        padding: 3,
        minWidth: 450
    }}>
        <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Typography variant="h4">{title}</Typography>
            <Pagination/>
        </Grid>
        
        {
            pokemons.map(p => {

                return(
                    <Grid key={p.id} item xs={12} md={6} lg={4} >
                        <PokemonCard pokemon={p}/>
                    </Grid>
                )
            })
        }
        
    </Grid>
  )
}

export default PokemonGrid
