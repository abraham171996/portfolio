import React from 'react'
import styles from './aboutBanner.module.scss'
import about from '../../assets/image/about.jpg'
const AboutBanner = () => {
    return (
        <div className={styles.AboutBanner}>
            <div className={styles.AboutBanner__content}>
                <h2>About me</h2>
                <p>A few years ago, I became interested in developing websites and interfaces.
                     Since then, I have been steadily improving my skills. Now I am developing websites 
                     to order or for myself and looking for job .
                </p>
            </div>
            <figure>
                <img src={about} alt="" />
            </figure>
        </div>
    )
}

export default AboutBanner