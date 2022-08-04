import { configureStore } from '@reduxjs/toolkit'

import MovieReducer from './slices/movieSlice'

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
})
