import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brushColor: "red",
  pixelSize: {
    width: 20,
    height: 20,
  },
};

const drawingSlice = createSlice({
  name: "drawingState",
  initialState,
  reducers: {
    myReducer(state, action) {
      console.log(state.brushColor)
    },
  },
});

export const drawingActions = drawingSlice.actions;
export const drawingReducer = drawingSlice.reducer;
