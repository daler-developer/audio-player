import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  count: 10,
  age: 100,
  name: 'Saidov Daler'
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {

  }
})

export const { } = playerSlice.actions

export default playerSlice.reducer
