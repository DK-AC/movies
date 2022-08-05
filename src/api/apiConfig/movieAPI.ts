import { apiConfig } from './index'

export const movieAPI = {
  getMovies() {
    return apiConfig.get('https://www.omdbapi.com/?apikey=15d9f402&s=boys')
  },
}
