import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { setMovies } from '../middlewares'
import { MoviesType, StatusType } from '../types'

const initialState = {
  movies: [] as MoviesType[],
  status: 'idle' as StatusType,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setStatus: (state: InitialStateType, action: PayloadAction<StatusType>) => {
      state.status = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(setMovies.fulfilled, (state: InitialStateType, action) => {
      state.movies = action.payload.movies
    })
  },
})

export const { setStatus } = movieSlice.actions

export const movieReducer = movieSlice.reducer

export type InitialStateType = typeof initialState
