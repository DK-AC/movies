import { FC, useEffect, useState } from 'react'

import { Movies, Preloader, Search, SearchType } from '../../components'
import { EMPTY_STRING } from '../../constans'

import styles from './Main.module.css'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL

export const Main: FC = () => {
  const [movies, setMovies] = useState([])
  const [movieTitle, setMovieTitle] = useState('matrix')
  const [searchTypeMovie, setSearchTypeMovie] = useState('all')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const searchType = `${
      searchTypeMovie === 'all' ? EMPTY_STRING : `&type=${searchTypeMovie}`
    }`

    setIsLoading(true)

    fetch(`${BASE_URL}?apikey=${API_KEY}&s=${movieTitle}${searchType}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMovies(data.Search)
        setSearchTypeMovie(searchTypeMovie)
      })

    setIsLoading(false)
  }, [movieTitle, searchTypeMovie, isLoading])

  const changeMovieTitleHandle = (title: string): void => {
    setMovieTitle(title)
  }
  const changeSearchTypeMovieHandle = (searchType: string): void => {
    setSearchTypeMovie(searchType)
  }

  return (
    <main className={styles.content}>
      <Search onChangeMovieTitle={changeMovieTitleHandle} />
      <SearchType onChangeSearchType={changeSearchTypeMovieHandle} />
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  )
}
