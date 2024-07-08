
import usePokemonsStore from "../hooks/usePokemonsStore"
import { useEffect } from "react"
import PokemonGrid from "../components/PokemonGrid"

const PokedexGrid = () => {

    const {page , fetchPage, pokemons} = usePokemonsStore()

    useEffect(()=>{
        fetchPage(page)
    },[page])    

    return (
        <PokemonGrid title="All Pokemons" pokemons={pokemons}/>
    )
}

export default PokedexGrid
