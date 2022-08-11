import { FC } from 'react'

import styles from './MovieCard.module.css'

type PropsType = {
  Poster: string
  Title: string
  Type: string
}

export const MovieCard: FC<PropsType> = props => {
  const { Poster, Title, Type } = props

  console.log('need refactoring')

  return (
    <div className={`${styles.cards} row`}>
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            {Poster === 'N/A' ? (
              <img
                alt="poster"
                className="activator"
                src="https://picsum.photos/300/400.jpg"
              />
            ) : (
              <img alt="poster" className="activator" src={Poster} />
            )}
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
