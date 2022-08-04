import { MoviesType, RootState } from '../types'

export const getMovies = (state: RootState): MoviesType[] => state.movie.movies
