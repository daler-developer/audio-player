import { createSlice } from "@reduxjs/toolkit"

import shapeOfYouAudio from 'audios/shape-of-you/audio.mp3'
import shapeOfYouImg from 'audios/shape-of-you/preview.jpeg'

import anotherLoveAudio from 'audios/another-love/audio.mp3'
import anotherLoveImg from 'audios/another-love/preview.jpg'

import sheLovesYouAudio from 'audios/she-loves-you/audio.mp3'
import sheLovesYouImg from 'audios/she-loves-you/preview.jpg'

export const audios = [
  {
    name: 'Shape Of You',
    src: shapeOfYouAudio,
    img: shapeOfYouImg
  },
  {
    name: 'Another Love',
    src: anotherLoveAudio,
    img: anotherLoveImg
  },
  {
    name: 'She loves you',
    src: sheLovesYouAudio,
    img: sheLovesYouImg
  }
]


const initialState = {
  isPaused: true,
  selectedAudioIndex: 2,
  audioListVisibility: false,
  shadeVisibility: false,
  isMuted: false
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    toggleIsPaused(state, action) {
      state.isPaused = !state.isPaused
    },
    setSelectedAudioIndex(state, action) {
      const { to } = action.payload
      state.selectedAudioIndex = to
    },
    toggleAudioListVisibility(state, action) {
      state.audioListVisibility = !state.audioListVisibility
    },
    toggleShadeVisibility(state, action) {
      state.shadeVisibility = !state.shadeVisibility
    },
    toggleIsMuted(state, action) {
      state.isMuted = !state.isMuted
    }
  }
})

export const selectIsPaused = (state) => {
  return state.player.isPaused
}

export const selectSelectedAudioIndex = (state) => {
  return state.player.selectedAudioIndex
}

export const selectAudioListVisibility = (state) => {
  return state.player.audioListVisibility
}

export const selectShadeVisibility = (state) => {
  return state.player.shadeVisibility
}

export const selectIsMuted = (state) => {
  return state.player.isMuted
}


export const { toggleIsPaused, setSelectedAudioIndex, toggleIsMuted, toggleAudioListVisibility, toggleShadeVisibility } = playerSlice.actions

export default playerSlice.reducer
