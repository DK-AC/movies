import { createAsyncThunk } from '@reduxjs/toolkit'

import { movieAPI } from '../../api'
import { ParamsMoviesType } from '../../api/apiConfig/movieAPI'
import { setStatus } from '../slices/movieSlice'
import { MoviesType } from '../types'

export type ThunkAPIType = {
  dispatch: (action: any) => any
}

export const setMovies = createAsyncThunk<
  { movies: MoviesType[] },
  ParamsMoviesType,
  ThunkAPIType
>('movie/getMovies', async (params, { dispatch }) => {
  dispatch(setStatus('pending'))
  try {
    const res = await movieAPI.getMovies(params)

    dispatch(setStatus('resolved'))

    return { movies: res.Search }
  } catch (err) {
    dispatch(setStatus('pending'))
    console.error(err)
  }
})
