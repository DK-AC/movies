import React, { ChangeEvent, FC } from 'react'

type PropsType = {
  name: string
  callback: (value: ChangeEvent<HTMLInputElement>) => void
  valueType: string
  value: string
}

export const SearchTypeInput: FC<PropsType> = props => {
  const { name, callback, valueType, value } = props

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
