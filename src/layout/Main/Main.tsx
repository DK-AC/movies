import { FC, useEffect, useState } from 'react'

import { Movies, Preloader, Search, SearchType } from '../../components'
import { EMPTY_STRING } from '../../constans'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getMovies, getStatus } from '../../store/selectors'
import { changeStatus, setMovies } from '../../store/slices/movieSlice'

import styles from './Main.module.css'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL

export const Main: FC = () => {
  const dispatch = useAppDispatch()

  const movies = useAppSelector(getMovies)
  const status = useAppSelector(getStatus)

  const [movieTitle, setMovieTitle] = useState('matrix')
  const [searchTypeMovie, setSearchTypeMovie] = useState('all')

  useEffect(() => {
    const searchType = `${
      searchTypeMovie === 'all' ? EMPTY_STRING : `&type=${searchTypeMovie}`
    }`

    dispatch(changeStatus('pending'))

    fetch(`${BASE_URL}?apikey=${API_KEY}&s=${movieTitle}${searchType}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        dispatch(setMovies(data.Search))
        setSearchTypeMovie(searchTypeMovie)
      })

    dispatch(changeStatus('resolved'))
  }, [dispatch, movieTitle, searchTypeMovie, status])

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
