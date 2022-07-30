import React, { useEffect, useState } from 'react'

import { Movies, Preloader, Search, SearchType } from '../../components'

import styles from './Main.module.css'

export const Main = () => {
  const [movies, setMovies] = useState([])
  const [movieTitle, setMovieTitle] = useState('matrix')
  const [searchTypeMovie, setSearchTypeMovie] = useState('all')

  useEffect(() => {
    const searchType = `${searchTypeMovie === 'all' ? '' : `&type=${searchTypeMovie}`}`

    fetch(`https://www.omdbapi.com/?apikey=15d9f402&s=${movieTitle}${searchType}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMovies(data.Search)
        setSearchTypeMovie(searchTypeMovie)
      })
  }, [movieTitle, searchTypeMovie])

  const changeMovieTitleHandle = title => {
    setMovieTitle(title)
  }
  const changeSearchTypeMovieHandle = searchType => {
    setSearchTypeMovie(searchType)
  }

  return (
    <main className={styles.content}>
      <Search onChangeMovieTitle={changeMovieTitleHandle} />
      <SearchType onChangeSearchType={changeSearchTypeMovieHandle} />
      {movies.length ? <Movies movies={movies} /> : <Preloader />}
    </main>
  )
}
