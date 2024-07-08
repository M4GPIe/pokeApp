import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch } from "../store"
import { setLoading } from "./pokemonsSlice"
import { pokemon } from "../../types/pokemon"

//type AppDispatch = Dispatch
type State = unknown

export const fetchPokemonPage = createAsyncThunk<
  // Return type of the payload creator
  pokemon[],
  // First argument to the payload creator
  number,
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch
    state: State
  }
>('fetchPokemonPage', async (page, thunkApi) => {

    thunkApi.dispatch(setLoading())

    //obtenemos las referencias con las url de los pokemons de la pagina

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${page*12}`)

    const data = await response.json()
    
    const pokemonReferences = data.results

    let pokemons : pokemon[] = []

    //para cada pokemon obtenemos sus datos a partir de la url

    for (let ref of pokemonReferences) {

        const req = await fetch(ref.url)

        pokemons.push((await req.json()))

    }

    return pokemons
})

