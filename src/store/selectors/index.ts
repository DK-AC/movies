import { Status } from '../../enum'
import { MoviesType, RootState } from '../types'

export const getMovies = (state: RootState): MoviesType[] => state.movie.movies

export const getStatus = (state: RootState): Status => state.movie.status
