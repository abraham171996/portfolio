import React from 'react'
import styles from './headerleft.module.scss'
import Logo from '../Logo'
const HeaderLeft = () => {
  return (
    <div className={styles.HeaderLeft}>
        <Logo/>
        <h2>ABRAHAM</h2>
    </div>
  )
}

export default HeaderLeft