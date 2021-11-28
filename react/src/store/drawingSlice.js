import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brushColor: "red",
  isDrawable: false,
  pixelSize: {
    width: 20,
    height: 20,
  },
};

const drawingSlice = createSlice({
  name: "drawingState",
  initialState,
  reducers: {
    setIsDrawable(state, action) {
      state.isDrawable = action.payload.isDrawable;
    },
    setBrushColor(state, action) {
      state.brushColor = action.payload.brushColor;
    },
  },
});

export const drawingActions = drawingSlice.actions;
export const drawingReducer = drawingSlice.reducer;
