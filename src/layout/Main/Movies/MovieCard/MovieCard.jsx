import React from 'react'

export const MovieCard = ({ Poster, Title }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={Poster} alt="movie" />
            <span className="card-title">{Title}</span>
            <a
              className="btn-floating halfway-fab waves-effect waves-light red"
              href="#/"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <p>{Title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
