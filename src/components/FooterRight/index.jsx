import React from 'react'
import styles from './footerRight.module.scss'
import {BiLogoFacebook,BiLogoTwitter,BiLogoDiscordAlt,BiLogoGithub} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const FooterRight = () => {
  return (
    <div className={styles.FooterRight}>
        <Link to='https://twitter.com/home' target='_blank'><BiLogoTwitter className={styles.twitter}/></Link>
        <Link to='https://discord.com/channels/@me' target='_blank'><BiLogoDiscordAlt className={styles.discord}/></Link>
        <Link to='https://www.facebook.com/profile.php?id=100006707957537' target='_blank'><BiLogoFacebook className={styles.facebook}/></Link>
        <Link to='https://github.com/abraham171996' target='_blank'><BiLogoGithub className={styles.github}/></Link>

    </div>
  )
}

export default FooterRight