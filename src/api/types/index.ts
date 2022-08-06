export type ParamsMoviesType = {
  movieTitle: string
  apiKey: string
  movieType: string
}

export type ResponseMoviesType<T> = {
  Search: T
  totalResults: string
  Response: boolean
}
