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
