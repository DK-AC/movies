import { ChangeEvent, FC, useState } from 'react'

import { SearchTypeInput } from '../SearchTypeInput/SearchTypeInput'

import styles from './SearchType.module.css'

type PropsType = {
  onChangeSearchType: (searchType: string) => void
}

export const SearchType: FC<PropsType> = props => {
  const { onChangeSearchType } = props

  const [valueType, setValueType] = useState('all')

  const changeValueTypeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget

    onChangeSearchType(value)
    setValueType(value)
  }

  return (
    <div className={styles.searchType}>
      <SearchTypeInput
        value="all"
        name="groupType"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        value="movie"
        name="groupType"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        value="series"
        name="groupType"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
    </div>
  )
}
