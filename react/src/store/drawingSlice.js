import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brushColor: "#4EB4E2",
  isDrawable: false,
  roundedness: 5,
  pixelMargin:2,
  pixelSize: {
    width: 20,
    height: 20,
  },
  boardContainerSize:{
    width:20,
    height:20
  }
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
    },
    setPixelWidth(state, action){
      state.pixelSize.width = action.payload.width
    },
    setPixelHeight(state, action){
      state.pixelSize.height = action.payload.height
    },
    setPixelMargin(state, action) {
      state.pixelMargin = action.payload.pixelMargin
    },
    setBoardContainerSize(state, action) {
      state.boardContainerSize = action.payload.boardContainerSize
    }
  },
});

export const drawingActions = drawingSlice.actions;
export const drawingReducer = drawingSlice.reducer;
