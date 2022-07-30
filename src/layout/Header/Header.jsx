import React from 'react'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <nav className={`${styles.navbar} blue darken-4 `}>
      <div className="nav-wrapper ">
        <a href="#/" className="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
