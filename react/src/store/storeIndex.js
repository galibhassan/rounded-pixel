import {configureStore} from '@reduxjs/toolkit'
import { toolReducer } from './toolSlice'
import { drawingReducer } from './drawingSlice'

const store = configureStore({
  reducer:{
    toolReducer,
    drawingReducer,
  }
})

export default store