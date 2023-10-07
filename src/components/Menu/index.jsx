import React from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.scss'
const Menu = () => {
  return (
    <nav className={styles.Menu}>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu