import { FC, useEffect, useState } from 'react'

import { Movies, Preloader, Search, SearchType } from '../../components'
import { API_KEY } from '../../constans'
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

  // useEffect(() => {
  //   const searchType = `${
  //     searchTypeMovie === 'all' ? EMPTY_STRING : `&type=${searchTypeMovie}`
  //   }`
  //
  //   dispatch(setStatus('pending'))
  //
  //   fetch(`${BASE_URL}?apikey=${API_KEY}&s=${movieTitle}${searchType}`)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       dispatch(setMovies(data.Search))
  //       setSearchTypeMovie(searchTypeMovie)
  //     })
  //
  //   dispatch(setStatus('resolved'))
  // }, [dispatch, movieTitle, searchTypeMovie, status])

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
      {status !== 'resolved' ? <Preloader /> : <Movies movies={movies} />}
    </main>
  )
}
