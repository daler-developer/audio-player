import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isPaused: true,
  audioSrc: ''
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    toggleIsPaused(state, action) {
      state.isPaused = !state.isPaused
    },
    setAudioSrc(state, action) {
      state.audioSrc = action.payload.src
    }
  }
})

export const selectIsPaused = (state) => {
  return state.player.isPaused
}

export const selectAudioSrc = (state) => {
  return state.player.audioSrc
}

export const { toggleIsPaused, setAudioSrc } = playerSlice.actions

export default playerSlice.reducer
