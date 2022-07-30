import React from 'react'

import { Preloader } from '../Preloader/Preloader'

import { MovieCard } from './MovieCard'
import styles from './Movies.module.css'

export const Movies = ({ movies }) => {
  if (!movies) {
    return <Preloader />
  }

  return (
    <div className={styles.movies}>
      {movies.map(({ Poster, Title, imdbID }) => {
        return <MovieCard key={imdbID} Title={Title} Poster={Poster} />
      })}
    </div>
  )
}
