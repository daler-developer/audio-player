import { createSlice } from "@reduxjs/toolkit"

// import shapeOfYouAudio from 'audios/shape-of-you/audio.mp3'
// import shapeOfYouImg from 'audios/shape-of-you/preview.jpeg'

// import anotherLoveAudio from 'audios/another-love/audio.mp3'
// import anotherLoveImg from 'audios/another-love/preview.jpg'

// import sheLovesYouAudio from 'audios/she-loves-you/audio.mp3'
// import sheLovesYouImg from 'audios/she-loves-you/preview.jpg'

import buddyAudio from 'audios/buddy/audio.mp3'
import buddyImg from 'audios/buddy/preview.jpg'

import creativeMindsAudio from 'audios/creative-minds/audio.mp3'
import creativeMindsImg from 'audios/creative-minds/preview.jpg'

import ukuleleAudio from 'audios/ukulele/audio.mp3'
import ukuleleImg from 'audios/ukulele/preview.jpg'

import littleIdeaAudio from 'audios/little-idea/audio.mp3'
import littleIdeaImg from 'audios/little-idea/preview.jpg'


export const audios = [
  // {
  //   name: 'Shape Of You',
  //   author: 'Ed Sheeran',
  //   src: shapeOfYouAudio,
  //   img: shapeOfYouImg
  // },
  // {
  //   name: 'Another Love',
  //   author: 'Tom Odell',
  //   src: anotherLoveAudio,
  //   img: anotherLoveImg
  // },
  // {
  //   name: 'She loves you',
  //   author: 'Slava Marlow',
  //   src: sheLovesYouAudio,
  //   img: sheLovesYouImg
  // },
  {
    name: 'Buddy',
    author: 'Saidov Daler',
    src: buddyAudio,
    img: buddyImg
  },
  {
    name: 'Creative Minds',
    author: 'Rasulov Aziz',
    src: creativeMindsAudio,
    img: creativeMindsImg
  },
  {
    name: 'Ukulele',
    author: 'Saidova Zarina',
    src: ukuleleAudio,
    img: ukuleleImg
  },
  {
    name: 'Little Idea',
    author: 'Saidova Takhmina',
    src: littleIdeaAudio,
    img: littleIdeaImg
  },
]


const initialState = {
  isPaused: true,
  selectedAudioIndex: 0,
  audioListVisibility: false,
  shadeVisibility: false,
  isMuted: false,
  currentAudioDuration: null,
  infinityModeActive: false,
  currentTime: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    toggleIsPaused(state, action) {
      state.isPaused = !state.isPaused
    },
    setSelectedAudioIndex(state, action) {
      state.selectedAudioIndex = action.payload.to
    },
    toggleAudioListVisibility(state, action) {
      state.audioListVisibility = !state.audioListVisibility
    },
    toggleShadeVisibility(state, action) {
      state.shadeVisibility = !state.shadeVisibility
    },
    toggleIsMuted(state, action) {
      state.isMuted = !state.isMuted
    },
    setCurrentAudioDuration(state, action) {
      state.currentAudioDuration = action.payload.to
    },
    toggleInfinityModeActive(state, action) {
      state.infinityModeActive = !state.infinityModeActive
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload.to
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

export const selectCurrentAudioDuration = (state) => {
  return state.player.currentAudioDuration
}

export const selectInfinityModeActive = (state) => {
  return state.player.infinityModeActive
}

export const selectCurrentTime = (state) => {
  return state.player.currentTime
}

export const { toggleIsPaused, setSelectedAudioIndex, toggleIsMuted, toggleAudioListVisibility, toggleShadeVisibility, setCurrentAudioDuration, toggleInfinityModeActive, setCurrentTime } = playerSlice.actions

export default playerSlice.reducer
