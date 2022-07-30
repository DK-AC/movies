import React, { useEffect, useState } from 'react'

import { Movies, Preloader } from '../../components'
import { Search } from '../../components/Search/Search'

import styles from './Main.module.css'

export const Main = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=15d9f402&s=matrix')
      .then(response => {
        return response.json()
      })
      .then(data => setMovies(data.Search))
  }, [])

  return (
    <main className={styles.content}>
      <Search />
      {movies.length ? <Movies movies={movies} /> : <Preloader />}
    </main>
  )
}
