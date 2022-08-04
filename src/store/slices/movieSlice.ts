import { createSlice } from '@reduxjs/toolkit'

import { MoviesType } from '../../types'

export interface MovieState {
  movies: MoviesType[]
}

const initialState: MovieState = {
  movies: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies: state => {
      state.movies = []
    },
  },
})

export const { getMovies } = movieSlice.actions

export default movieSlice.reducer
