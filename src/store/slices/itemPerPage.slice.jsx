import { createSlice } from '@reduxjs/toolkit';

export const itemPerPage = createSlice({
    name: 'itemPerPage',
    initialState: 3,
    reducers: {
        setItemPerPage: (state , action) => {
            return action.payload;
        }
    }
})

export const { setItemPerPage } = itemPerPage.actions;

export default itemPerPage.reducer;
