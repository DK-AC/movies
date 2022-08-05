import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    changeStatus: (state: InitialStateType, action: PayloadAction<StatusType>) => {
      state.status = action.payload
    },
  },
})

export const { setMovies, changeStatus } = movieSlice.actions

export const movieReducer = movieSlice.reducer

export type InitialStateType = typeof initialState
