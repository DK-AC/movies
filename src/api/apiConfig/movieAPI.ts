import { AxiosResponse } from 'axios'

import { MoviesType } from '../../store/types'
import { ParamsMoviesType, ResponseMoviesType } from '../types'

import { apiConfig } from './index'

export const movieAPI = {
  getMovies({ movieTitle, apiKey, type }: ParamsMoviesType) {
    return apiConfig
      .get<any, AxiosResponse<ResponseMoviesType<MoviesType[]>>, MoviesType[]>(
        `?s=${movieTitle}&type=${type}&apikey=${apiKey}`,
      )
      .then(data => data.data)
  },
}
