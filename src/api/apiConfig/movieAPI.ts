import { AxiosResponse } from 'axios'

import { MoviesType } from '../../store/types'

import { apiConfig } from './index'

export type ParamsMoviesType = {
  movieTitle: string
  apiKey: string
  type: string
}

export type ResponseMoviesType<T> = {
  Search: T
  totalResults: string
  Response: boolean
}

export const movieAPI = {
  getMovies({ movieTitle, apiKey, type }: ParamsMoviesType) {
    return apiConfig
      .get<any, AxiosResponse<ResponseMoviesType<MoviesType[]>>, MoviesType[]>(
        `?s=${movieTitle}&type=${type}&apikey=${apiKey}`,
      )
      .then(data => data.data)
  },
}
