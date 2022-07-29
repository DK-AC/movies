import React from 'react'

import { MovieCard } from './MovieCard'

export const Movies = ({ movies }) => {
  if (!movies) {
    return <div>loading...</div>
  }

  return (
    <div className="movies">
      {movies.map(({ Poster, Title, imdbID }) => {
        return <MovieCard key={imdbID} Title={Title} Poster={Poster} />
      })}
    </div>
  )
}
