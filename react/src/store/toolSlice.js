import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTool: 'brush'
}

const toolSlice = createSlice({
  name: "toolState",
  initialState,
  reducers: {
    selectTool(state, action) {
      state.activeTool = action.payload.toolName
    }
  },
});

export const toolActions = toolSlice.actions;
export const toolReducer = toolSlice.reducer;
