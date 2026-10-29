
import { configureStore } from '@reduxjs/toolkit'
import rocketReducer from './RocketSlice.js'

export const store = configureStore({
  reducer: {
    rocket: rocketReducer
  }
})
