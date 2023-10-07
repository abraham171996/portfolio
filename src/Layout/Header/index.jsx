import React from 'react'
import styles from './header.module.scss'
import HeaderLeft from '../../components/HeaderLeft'
import HeaderRight from '../../components/HeaderRight'
import Menu from '../../components/Menu'

const Header = () => {
  return (
    <header className={styles.Header}>
        <HeaderLeft/>
        <Menu/>
        <HeaderRight/>
    </header>
  )
}

export default Header