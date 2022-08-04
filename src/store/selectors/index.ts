import { MoviesType, RootState } from '../types'
import { StatusType } from '../types/MoviesType'

export const getMovies = (state: RootState): MoviesType[] => state.movie.movies

export const getStatus = (state: RootState): StatusType => state.movie.status
