import React from 'react'

import { MovieCard } from './MovieCard'
import styles from './Movies.module.css'

export const Movies = ({ movies }) => {
  return (
    <div className={styles.movies}>
      {movies.map(({ Poster, Title, imdbID }) => {
        return <MovieCard key={imdbID} Title={Title} Poster={Poster} />
      })}
    </div>
  )
}
