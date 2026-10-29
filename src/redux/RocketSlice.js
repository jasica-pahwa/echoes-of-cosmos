
import { createSlice } from '@reduxjs/toolkit'

const rocketSlice = createSlice({
  name: 'rocket',

  initialState: {
    parts: {}
  },

  reducers: {
    addPart: (state, action) => {
      const part = action.payload
      state.parts[part.type] = part
    },

    removePart: (state, action) => {
      delete state.parts[action.payload]
    },

    resetRocket: (state) => {
      state.parts = {}
    }
  }
})

export const { addPart, removePart, resetRocket } =
  rocketSlice.actions

export default rocketSlice.reducer
