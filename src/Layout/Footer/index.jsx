import React from 'react'
import FooterLeft from '../../components/FooterLeft'
import FooterRight from '../../components/FooterRight'
import styles from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.Footer}>
        <FooterLeft/>
        <FooterRight/>
    </footer>
  )
}

export default Footer