import React, { useState } from 'react'

import styles from './Search.module.css'

export const Search = ({ onChangeMovieTitle }) => {
  const [movieTitle, setMovieTitle] = useState('')

  const onSearchMoviesHandle = event => {
    setMovieTitle(event.currentTarget.value)
  }

  const changeMovieTitleSearchClick = () => {
    onChangeMovieTitle(movieTitle)
  }

  return (
    <div className="row">
      <input
        placeholder="search"
        type="search"
        className="validate"
        value={movieTitle}
        onChange={onSearchMoviesHandle}
      />
      <button
        className={`btn ${styles.searchButton} blue darken-4`}
        type="button"
        onClick={changeMovieTitleSearchClick}
      >
        search
      </button>
    </div>
  )
}
