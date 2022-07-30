import React, { useState } from 'react'

export const Search = () => {
  const [value, setValue] = useState('')

  const onSearchMoviesHandle = event => {
    setValue(event.currentTarget.value)
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={value}
            onChange={onSearchMoviesHandle}
          />
        </div>
      </div>
    </div>
  )
}
