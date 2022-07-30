import React from 'react'

export const SearchTypeInput = ({ name, callback, valueType, value }) => {
  return (
    <label htmlFor={value}>
      <input
        id={value}
        name={name}
        type="radio"
        value={value}
        checked={valueType === value}
        onChange={callback}
      />
      <span>{`Show ${value}`}</span>
    </label>
  )
}
