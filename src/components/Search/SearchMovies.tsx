import { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react'

import { EMPTY_STRING } from '../../constans'
import { Nullable } from '../../types'

import styles from './SearchMovies.module.css'

type PropsType = {
  onChangeMovieTitle: (MovieTitle: string) => void
}

export const SearchMovies: FC<PropsType> = memo(props => {
  const { onChangeMovieTitle } = props

  const [movieTitle, setMovieTitle] = useState<string>(EMPTY_STRING)
  const [error, setError] = useState<Nullable<string>>(EMPTY_STRING)

  const onSearchMoviesHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    setMovieTitle(event.currentTarget.value)
  }

  const searchMovieTitleClick = (): void => {
    if (movieTitle.trim() === EMPTY_STRING) {
      setError('Enter movie title')
    } else {
      onChangeMovieTitle(movieTitle)
      setError(null)
      setMovieTitle(EMPTY_STRING)
    }
  }

  const searchMoviesEnterKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      searchMovieTitleClick()
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
        onKeyDown={searchMoviesEnterKeyPress}
      />
      <button
        className={`btn ${styles.searchButton} blue darken-4`}
        type="button"
        onClick={searchMovieTitleClick}
      >
        search
      </button>
      {error ? <div className={styles.error}>{error}</div> : EMPTY_STRING}
    </div>
  )
})
