import { createAsyncThunk } from '@reduxjs/toolkit'

import { movieAPI, ParamsMoviesType } from '../../api'
import { Status } from '../../enum'
import { setStatus } from '../slices/movieSlice'
import { MoviesType, ThunkAPIType } from '../types'

export const setMovies = createAsyncThunk<
  { movies: MoviesType[] },
  ParamsMoviesType,
  ThunkAPIType
>('movie/getMovies', async (params, { dispatch }) => {
  dispatch(setStatus(Status.PENDING))
  try {
    const res = await movieAPI.getMovies(params)

    dispatch(setStatus(Status.RESOLVED))

    return { movies: res.Search } as { movies: MoviesType[] } // Add type assertion here
  } catch (err) {
    dispatch(setStatus(Status.REJECTED))
    throw err // Throw the error to be caught by the rejectWithValue handler
  }
})
