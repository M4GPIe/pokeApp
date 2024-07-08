import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store/store"
import { addFavourite, deleteFavourite, setFavPage, setPage, toggleSeeFavourites } from "../../store/pokemons/pokemonsSlice"
import { fetchPokemonPage } from "../../store/pokemons/thunks"
import { pokemon } from "../../types/pokemon"

const usePokemonsStore = () => {

    const dispatch = useAppDispatch()

    const state = useSelector((state: RootState) => state.pokemon)

    const fetchPage = (page : number)=>{
        dispatch(fetchPokemonPage(page))
    }

    const addToFavourite = (p : pokemon)=>{
        dispatch(addFavourite(p))
    }

    const deleteFromFavourite = (id : number)=>{
        dispatch(deleteFavourite(id))
    }

    const nextPage = () => {
        const page = state.page + 1
        dispatch(setPage(page))
    }

    const prevPage = () => {
        if(state.page > 0){
            const page = state.page - 1
            dispatch(setPage(page))
        }
    }

    const changeSeeFavourites = () => {
        dispatch(toggleSeeFavourites())
    }

    const nextFavPage = ()=>{
        if(state.favPage < Math.floor(state.favouritePokemons.length / 12)){
            dispatch(setFavPage(state.favPage + 1))
        }
    }

    const prevFavPage = ()=>{
        if(state.favPage > 0){
            dispatch(setFavPage(state.favPage - 1))
        }
    }
    
    return {
        ...state,

        nextPage,
        prevPage,
        fetchPage,
        addToFavourite,
        deleteFromFavourite,
        changeSeeFavourites,
        nextFavPage,
        prevFavPage
    }
}

export default usePokemonsStore
