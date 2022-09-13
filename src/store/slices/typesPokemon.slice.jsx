import { createSlice } from '@reduxjs/toolkit';
import {setIsLoading} from './isLoading.slice';
import axios from 'axios';

export const typesPokemonSlice = createSlice({
    name: 'types',
    initialState: [],
    reducers: {
        setTypes : (state, action) => {
            return action.payload;
        }
    }
})

export const { setTypes } = typesPokemonSlice.actions;

export const getAllTypesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://pokeapi.co/api/v2/type')
        .then((res) => dispatch(setTypes(res.data.results)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default typesPokemonSlice.reducer;
