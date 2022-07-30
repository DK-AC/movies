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
        id="all"
        htmlFor="all"
        name="groupType"
        value="all"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        id="movie"
        htmlFor="movie"
        name="groupType"
        value="movie"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
      <SearchTypeInput
        id="series"
        htmlFor="series"
        name="groupType"
        value="series"
        valueType={valueType}
        callback={changeValueTypeHandle}
      />
    </div>
  )
}
