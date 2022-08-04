import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MoviesType } from '../types'

const initialState = {
  movies: [] as MoviesType[],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state: InitialStateType, action: PayloadAction<MoviesType[]>) => {
      state.movies = action.payload
    },
  },
})

export const { setMovies } = movieSlice.actions

export const movieReducer = movieSlice.reducer

export type InitialStateType = typeof initialState
