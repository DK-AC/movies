import React, { useState } from 'react'

export const Search = ({ onChangeMovieTitle }) => {
  const [movieTitle, setMovieTitle] = useState('')

  const onSearchMoviesHandle = event => {
    setMovieTitle(event.currentTarget.value)
  }

  const onChangeMovieTitleForSearch = () => {
    onChangeMovieTitle(movieTitle)
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={movieTitle}
            onChange={onSearchMoviesHandle}
            onBlur={onChangeMovieTitleForSearch}
          />
        </div>
      </div>
    </div>
  )
}
