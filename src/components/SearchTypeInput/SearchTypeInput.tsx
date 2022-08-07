import { ChangeEvent, FC } from 'react'

type PropsType = {
  name: string
  callback: (value: ChangeEvent<HTMLInputElement>) => void
  movieType: string
  value: string
}

export const SearchTypeInput: FC<PropsType> = props => {
  const { name, callback, movieType, value } = props

  return (
    <label htmlFor={value}>
      <input
        id={value}
        name={name}
        type="radio"
        value={value}
        checked={movieType === value}
        onChange={callback}
      />
      <span>{`Show ${value}`}</span>
    </label>
  )
}
