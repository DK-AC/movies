import React from 'react'

export const SearchTypeInput = ({ name, htmlFor, value, callback, id, valueType }) => {
  return (
    <label htmlFor={htmlFor}>
      <input
        id={id}
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
