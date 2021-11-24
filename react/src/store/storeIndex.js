import {configureStore} from '@reduxjs/toolkit'
import { toolReducer } from './toolSlice'

const store = configureStore({
  reducer:{
    toolReducer,
  }
})

export default store