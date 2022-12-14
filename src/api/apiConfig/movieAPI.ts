import { AxiosResponse } from 'axios'

import { EMPTY_STRING } from '../../constans'
import { MoviesType } from '../../store/types'
import { ParamsMoviesType, ResponseMoviesType } from '../types'

import { apiConfig } from './index'

export const movieAPI = {
  getMovies({ movieTitle, apiKey, movieType }: ParamsMoviesType) {
    return apiConfig
      .get<any, AxiosResponse<ResponseMoviesType<MoviesType[]>>, MoviesType[]>(
        `?s=${movieTitle}&apikey=${apiKey}
${movieType === 'all' ? EMPTY_STRING : `&type=${movieType}`}`,
      )
      .then(data => data.data)
  },
}
