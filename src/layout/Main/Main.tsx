import { FC, useCallback, useEffect, useState } from 'react'

import { Movies, Preloader, SearchMovies, SearchType } from '../../components'
import { API_KEY } from '../../constans'
import { Status, Type } from '../../enum'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setMovies } from '../../store/middlewares'
import { getMovies, getStatus } from '../../store/selectors'

import styles from './Main.module.css'

export const Main: FC = () => {
  const dispatch = useAppDispatch()

  console.log('go to github')
  console.log('go to github')

  const movies = useAppSelector(getMovies)
  const status = useAppSelector(getStatus)

  const [movieTitle, setMovieTitle] = useState('National')
  const [movieType, setMovieType] = useState(Type.ALL)

  useEffect(() => {
    if (API_KEY) {
      dispatch(setMovies({ movieTitle, apiKey: API_KEY, movieType }))
    }
  }, [dispatch, movieTitle, movieType])

  const changeMovieTitleHandle = useCallback((movieTitle: string): void => {
    setMovieTitle(movieTitle)
  }, [])
  const changeMovieTypeHandle = useCallback((movieType: Type): void => {
    setMovieType(movieType)
  }, [])

  return (
    <main className={styles.content}>
      <SearchMovies onChangeMovieTitle={changeMovieTitleHandle} />
      <SearchType onChangeMovieType={changeMovieTypeHandle} />
      {status !== Status.RESOLVED ? <Preloader /> : <Movies movies={movies} />}
    </main>
  )
}
