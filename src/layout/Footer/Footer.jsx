import React from 'react'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={` ${styles.footer} blue darken-4 `}>
      <div className="container" />
      <div className="footer-copyright">
        <div className="container">
          © 2022 Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/DK-AC/movies"
          >
            Git
          </a>
        </div>
      </div>
    </footer>
  )
}
