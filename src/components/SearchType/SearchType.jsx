import React, { useState } from 'react'

import { SearchTypeInput } from '../SearchTypeInput/SearchTypeInput'

import styles from './SearchType.module.css'

export const SearchType = ({ onChangeSearchType }) => {
  const [valueType, setValueType] = useState('all')

  const changeValueTypeHandle = event => {
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
