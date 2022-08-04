import { MoviesType, RootState, StatusType } from '../types'

export const getMovies = (state: RootState): MoviesType[] => state.movie.movies

export const getStatus = (state: RootState): StatusType => state.movie.status
