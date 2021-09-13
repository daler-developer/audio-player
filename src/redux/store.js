import { configureStore } from "@reduxjs/toolkit"
import playerReducer from "./features/playerReducer"

const store = configureStore({
  reducer: {
    player: playerReducer
  }
})

export default store
