import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setPokemons : (state , action ) => {
            return action.payload;
        }
    }
})

export const { setPokemons } = pokemonsSlice.actions;

export const getAllPokemonsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(res => dispatch(setPokemons(res.data.results)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getPokemonByName = (url) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(url)
        .then(res => {
            const url = `https://pokeapi.co/api/v2/pokemon/${res.data.id}`;
            dispatch(setPokemons([  { name: res.data.name , url : url}]));
        })
        .catch( err => console.log("Not found") )
        .finally(() => dispatch(setIsLoading(false)));
}

export const getAllPokemonsByTypeThunk = (url) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(url)
        .then(res => dispatch(setPokemons(res.data.pokemon)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default pokemonsSlice.reducer;
