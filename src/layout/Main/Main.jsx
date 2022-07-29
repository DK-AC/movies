import React, { useEffect, useState } from 'react'

import styles from './Main.module.css'
import { Movies } from './Movies'

export const Main = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=15d9f402&s=boys')
      .then(response => {
        return response.json()
      })
      .then(data => setMovies(data.Search))
  }, [])

  return (
    <main className={styles.content}>
      <Movies movies={movies} />
    </main>
  )
}
