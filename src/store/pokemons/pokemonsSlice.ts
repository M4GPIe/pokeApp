import { createSlice } from "@reduxjs/toolkit"
import { fetchPokemonPage } from "./thunks"
import { pokemon } from "../../types/pokemon"

type initialState = {
    pokemons: pokemon[],
    favouritePokemons: pokemon[],
    page: number,
    loading: boolean,
    seeFavourites: boolean,
    favPage: number
}

const initialState : initialState = {
    pokemons: [],
    favouritePokemons: [],
    page: 0,
    loading: false,
    seeFavourites: false,
    favPage: 0
}

/**
 * La paginacion de los pokemons es independiente a la de los favoritos
 * El fetch de los datos de la API se hace mediante un custom thunk, que devuelve una promesa con el resultado procesada por el reducer
 */

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, {payload}) => {
            state.pokemons = payload
            state.loading = false
        },
        setLoading: (state) => {
            state.loading = true
        },
        addFavourite: (state, {payload}) => {
            state.favouritePokemons.push(payload)
        },
        deleteFavourite: (state, {payload}) => {
            state.favouritePokemons = state.favouritePokemons.filter(p => p.id !== payload)
        },
        setPage: (state, {payload}) => {
            state.page = payload
        },
        toggleSeeFavourites: (state) => {
            state.seeFavourites = !state.seeFavourites
        },
        setFavPage: (state , {payload}) => {
            state.favPage = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonPage.fulfilled, (state, { payload }) => {
          state.pokemons = payload
          state.loading = false
        })
        builder.addCase(fetchPokemonPage.rejected, (state, action) => {
            console.log(action.error)
        })
    },
});


// Action creators are generated for each case reducer function
export const {setPokemons, setLoading, addFavourite, deleteFavourite, setPage, toggleSeeFavourites, setFavPage} = pokemonSlice.actions;