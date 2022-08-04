import { FC } from 'react'

import { MoviesType } from '../../types'

import { MovieCard } from './MovieCard'
import styles from './Movies.module.css'

type PropsType = {
  movies: MoviesType[]
}

export const Movies: FC<PropsType> = props => {
  const { movies } = props

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
