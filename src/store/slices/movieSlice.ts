import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { setMoviesThunk } from '../middlewares'
import { MoviesType, StatusType } from '../types'

const initialState = {
  movies: [] as MoviesType[],
  status: 'idle' as StatusType,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state: InitialStateType, action: PayloadAction<MoviesType[]>) => {
      state.movies = action.payload
    },
    setStatus: (state: InitialStateType, action: PayloadAction<StatusType>) => {
      state.status = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(setMoviesThunk.fulfilled, (state: InitialStateType, action) => {
      state.movies = action.payload.movies
    })
  },
})

export const { setMovies, setStatus } = movieSlice.actions

export const movieReducer = movieSlice.reducer

export type InitialStateType = typeof initialState
