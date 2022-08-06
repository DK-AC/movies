import { ChangeEvent, FC, useState } from 'react'

import { Type } from '../../enum'
import { SearchTypeInput } from '../SearchTypeInput/SearchTypeInput'

import styles from './SearchType.module.css'

type PropsType = {
  onChangeMovieType: (movieType: Type) => void
}

export const SearchType: FC<PropsType> = props => {
  const { onChangeMovieType } = props

  const [movieType, setMovieType] = useState(Type.ALL)

  const changeValueTypeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget

    onChangeMovieType(value as Type)
    setMovieType(value as Type)
  }

  return (
    <div className={styles.searchType}>
      <SearchTypeInput
        value={Type.ALL}
        name="groupType"
        movieType={movieType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        value={Type.MOVIE}
        name="groupType"
        movieType={movieType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        value={Type.SERIES}
        name="groupType"
        movieType={movieType}
        callback={changeValueTypeHandle}
      />
    </div>
  )
}
