import React, { useEffect, useState } from 'react'

import { Movies, Preloader } from '../../components'
import { Search } from '../../components/Search/Search'

import styles from './Main.module.css'

export const Main = () => {
  const [movies, setMovies] = useState([])
  const [movieTitle, setMovieTitle] = useState('matrix')

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=15d9f402&s=${movieTitle}`)
      .then(response => {
        return response.json()
      })
      .then(data => setMovies(data.Search))
  }, [movieTitle])

  const changeMovieTitleHandle = title => {
    setMovieTitle(title)
  }

  return (
    <main className={styles.content}>
      <Search onChangeMovieTitle={changeMovieTitleHandle} />
      {movies.length ? <Movies movies={movies} /> : <Preloader />}
    </main>
  )
}
