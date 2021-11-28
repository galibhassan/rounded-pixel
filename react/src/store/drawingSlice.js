import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brushColor: "red",
  isDrawable: false,
  roundedness: 5,
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
    setPixelRoundedness(state,action) {
      state.roundedness = action.payload.roundedness
    }
  },
});

export const drawingActions = drawingSlice.actions;
export const drawingReducer = drawingSlice.reducer;
