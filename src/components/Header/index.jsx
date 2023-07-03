import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import HeaderLinks from 'components/HeaderLinks'

function Header() {
  return (
    <header className={styles.header}>
        <Link to="./" className={styles.link}>
            <h3>Monsta Clips</h3>
        </Link>
        <nav>
            <HeaderLinks url="./">
                Home
            </HeaderLinks>
            <HeaderLinks url="./favorites">
                Faves
            </HeaderLinks>
            <HeaderLinks url="./aboutme">
                About Me
            </HeaderLinks>
        </nav>
    </header>
  )
}

export default Header;
