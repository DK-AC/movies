import { ChangeEvent, FC, useState } from 'react'

import { Nullable } from '../../types'

import styles from './Search.module.css'

type PropsType = {
  onChangeMovieTitle: (MovieTitle: string) => void
}

export const Search: FC<PropsType> = props => {
  const { onChangeMovieTitle } = props

  const [movieTitle, setMovieTitle] = useState<string>('')
  const [error, setError] = useState<Nullable<string>>('')

  const onSearchMoviesHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    setMovieTitle(event.currentTarget.value)
  }

  const searchMovieTitleClick = (): void => {
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
