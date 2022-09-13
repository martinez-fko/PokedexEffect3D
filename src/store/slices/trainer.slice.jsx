import { createSlice } from "@reduxjs/toolkit";

export const trainerSlice = createSlice({
  name: "trainer",
  initialState: "",
  reducers: {
    setTrainer : (state, action ) => {
      return action.payload;
    }
  },
});

export const {setTrainer} = trainerSlice.actions;

export default trainerSlice.reducer;
