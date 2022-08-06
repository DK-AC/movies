import { AxiosResponse } from 'axios'

import { MoviesType } from '../../store/types'

import { apiConfig } from './index'

export type ParamsMoviesType = {
  movieTitle: string
  apiKey: string
}

export type ResponseMoviesType<T> = {
  Search: T
  totalResults: string
  Response: boolean
}

export const movieAPI = {
  getMovies({ movieTitle, apiKey }: ParamsMoviesType) {
    return apiConfig
      .get<any, AxiosResponse<ResponseMoviesType<MoviesType[]>>, MoviesType[]>(
        `?s=${movieTitle}&apikey=${apiKey}`,
      )
      .then(data => data.data)
  },
}
