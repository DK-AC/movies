import { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react'

import { EMPTY_STRING } from '../../constans'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getTitle } from '../../store/selectors'
import { getTitleMovie } from '../../store/slices/movieSlice'
import { Nullable } from '../../types'

import styles from './SearchMovies.module.css'

type PropsType = {
  onChangeMovieTitle: (MovieTitle: string) => void
}

export const SearchMovies: FC<PropsType> = memo(props => {
  const dispatch = useAppDispatch()
  const { onChangeMovieTitle } = props
  const title = useAppSelector(getTitle)

  const [movieTitle, setMovieTitle] = useState<Nullable<string>>(title)
  const [error, setError] = useState<Nullable<string>>(EMPTY_STRING)

  const onSearchMoviesHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    setMovieTitle(event.currentTarget.value)
    dispatch(getTitleMovie(event.currentTarget.value))
  }

  const searchMovieTitleClick = (): void => {
    if (movieTitle) {
      if (movieTitle.trim() === EMPTY_STRING) {
        setError('Enter movie title')
      } else {
        onChangeMovieTitle(movieTitle)
        setError(null)
        setMovieTitle(EMPTY_STRING)
      }
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
        value={title}
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
