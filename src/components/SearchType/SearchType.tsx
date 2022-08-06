import { ChangeEvent, FC, useState } from 'react'

import { Type } from '../../enum'
import { SearchTypeInput } from '../SearchTypeInput/SearchTypeInput'

import styles from './SearchType.module.css'

type PropsType = {
  onChangeSearchType: (searchType: string) => void
}

export const SearchType: FC<PropsType> = props => {
  const { onChangeSearchType } = props

  const [valueType, setValueType] = useState(Type.ALL)

  const changeValueTypeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget

    onChangeSearchType(value)
    setValueType(value as Type)
  }

  return (
    <div className={styles.searchType}>
      <SearchTypeInput
        value={Type.ALL}
        name="groupType"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        value={Type.MOVIE}
        name="groupType"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        value={Type.SERIES}
        name="groupType"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
    </div>
  )
}
