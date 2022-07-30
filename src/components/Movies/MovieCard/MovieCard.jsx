import React from 'react'

export const MovieCard = ({ Poster, Title, Type }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={Poster} alt="poster" />
            <span className="card-title">{Title}</span>
          </div>
          <div className="card-content center">
            <p>
              <b>{Title}</b>
            </p>
            <p>
              <span>{Type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
