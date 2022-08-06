import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { movieReducer } from './slices/movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
  devTools: process.env.NODE_ENV !== 'production',
})
