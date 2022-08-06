import { FC, useEffect, useState } from 'react'

import { Movies, Preloader, Search, SearchType } from '../../components'
import { API_KEY } from '../../constans'
import { Status } from '../../enum'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setMovies } from '../../store/middlewares'
import { getMovies, getStatus } from '../../store/selectors'

import styles from './Main.module.css'

export const Main: FC = () => {
  const dispatch = useAppDispatch()

  const movies = useAppSelector(getMovies)
  const status = useAppSelector(getStatus)

  const [movieTitle, setMovieTitle] = useState('matrix')
  const [searchTypeMovie, setSearchTypeMovie] = useState('all')

  useEffect(() => {
    if (API_KEY) {
      dispatch(setMovies({ movieTitle, apiKey: API_KEY, type: searchTypeMovie }))
    }
  }, [dispatch, movieTitle, searchTypeMovie])

  const changeMovieTitleHandle = (title: string): void => {
    setMovieTitle(title)
  }
  const changeSearchTypeMovieHandle = (searchType: string): void => {
    setSearchTypeMovie(searchType)
  }

  return (
    <main className={styles.content}>
      <Search onChangeMovieTitle={changeMovieTitleHandle} />
      <SearchType onChangeSearchType={changeSearchTypeMovieHandle} />
      {status !== Status.RESOLVED ? <Preloader /> : <Movies movies={movies} />}
    </main>
  )
}
