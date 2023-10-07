import React from 'react'
import styles from './homeBanner.module.scss'
import ellipse1 from '../../assets/image/Ellipse1.png'
import ellipse2 from '../../assets/image/Ellipse2.png'
import person from '../../assets/image/person.png'
const HomeBanner = () => {
  return (
    <div className={styles.HomeBanner}>
        <figure className={styles.firstFigure}>
            <img src={ellipse1} alt="" />
            <img className={styles.ellipse2} src={ellipse2} alt="" />
        </figure>
        <figure className={styles.secondFigure}>
            <img src={person} alt="" />
        </figure>
    </div>
  )
}

export default HomeBanner