import React from 'react'

import { MovieCard } from './MovieCard'
import styles from './Movies.module.css'

export const Movies = ({ movies }) => {
  if (!movies) {
    return <h4 className="center">Movies not found...</h4>
  }

  return (
    <div className={styles.movies}>
      {movies.map(({ Poster, Title, imdbID, Type }) => {
        return <MovieCard key={imdbID} Title={Title} Poster={Poster} Type={Type} />
      })}
    </div>
  )
}
