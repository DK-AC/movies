import React, { useState } from 'react'

import styles from './Search.module.css'

export const Search = ({ onChangeMovieTitle }) => {
  const [movieTitle, setMovieTitle] = useState('')
  const [error, setError] = useState('')

  const onSearchMoviesHandle = event => {
    setMovieTitle(event.currentTarget.value)
  }

  const searchMovieTitleClick = () => {
    if (movieTitle.trim() === '') {
      setError('Enter movie title')
    } else {
      onChangeMovieTitle(movieTitle)
      setError(null)
      setMovieTitle('')
    }
  }

  return (
    <div className="row">
      <input
        placeholder="Search"
        type="search"
        className="center"
        value={movieTitle}
        onChange={onSearchMoviesHandle}
      />
      <button
        className={`btn ${styles.searchButton} blue darken-4`}
        type="button"
        onClick={searchMovieTitleClick}
      >
        search
      </button>
      {error ? <div className={styles.error}>{error}</div> : ''}
    </div>
  )
}
