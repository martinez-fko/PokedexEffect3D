import { createSlice } from '@reduxjs/toolkit';

export const isDark = createSlice({
    name: 'isDark',
    initialState: false,
    reducers: {
        setIsDark : (state, action) => {
            return action.payload;
        }
    }
})

export const { setIsDark } = isDark.actions;

export default isDark.reducer;
