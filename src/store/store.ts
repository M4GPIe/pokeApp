import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './pokemons/pokemonsSlice'
import { useDispatch } from 'react-redux'

/*
 * serializableCheck: false
 * Es para desactivar el middleware que pone por defecto en modo dev porque mete delay al fetch
 * En produccion este middleware se desactiva por defecto 
 */

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store