import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Status } from '../../enum'
import { setMovies } from '../middlewares'
import { MoviesType } from '../types'

const initialState = {
  movies: [] as MoviesType[],
  status: Status.IDLE as Status,
  title: '',
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setStatus: (state: InitialStateType, action: PayloadAction<Status>) => {
      state.status = action.payload
    },
    getTitleMovie: (state: InitialStateType, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(setMovies.fulfilled, (state: InitialStateType, action) => {
      state.movies = action.payload.movies
    })
  },
})

export const { setStatus, getTitleMovie } = movieSlice.actions

export const movieReducer = movieSlice.reducer

export type InitialStateType = typeof initialState
