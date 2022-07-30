import React, { useState } from 'react'

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
      <label htmlFor="all">
        <input
          id="all"
          name="groupType"
          type="radio"
          value="all"
          checked={valueType === 'all'}
          onChange={changeValueTypeHandle}
        />
        <span>All</span>
      </label>
      <label htmlFor="movie">
        <input
          id="movie"
          name="groupType"
          type="radio"
          value="movie"
          checked={valueType === 'movie'}
          onChange={changeValueTypeHandle}
        />
        <span>Only movies</span>
      </label>
      <label htmlFor="series">
        <input
          id="series"
          name="groupType"
          type="radio"
          value="series"
          checked={valueType === 'series'}
          onChange={changeValueTypeHandle}
        />
        <span>Only serials</span>
      </label>
    </div>
  )
}
