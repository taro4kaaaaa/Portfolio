import React from 'react'
import styles from './Home.module.css'
import imgfd7ecbec_2630_43b7_bf60_a6768e180b2d_1 from '../../assets/fd7ecbec-2630-43b7-bf60-a6768e180b2d-1.png'
import img1 from '../../assets/Ellipse1.png'
import img2 from '../../assets/Ellipse2.png'
import img3 from '../../assets/Ellipse3.png'
import img4 from '../../assets/Ellipse4.png'

interface HomeProps {
  className?: string
}

export const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={`${styles['home']} ${className || ''}`}>
      <span className={styles['profile']}>PROFILE</span>
      <span className={styles['everything-we-do']}>
        "Everything we do now, we have to be user-centric, not device-centric." — Bill Gates
      </span>
      
      {/* Контейнер для кругов для лучшего контроля на планшетах */}
      <div className={styles['ellipsesContainer']}>
        <img src={img1} alt="ellipse1" className={styles['ellipse1']} />
        <img src={img2} alt="ellipse2" className={styles['ellipse2']} />
        <img src={img3} alt="ellipse3" className={styles['ellipse3']} />
        <img src={img4} alt="ellipse4" className={styles['ellipse4']} />
      </div>
      
      <img 
        className={styles['fd7ecbec263043b7']} 
        src={imgfd7ecbec_2630_43b7_bf60_a6768e180b2d_1} 
        alt="fd7ecbec263043b7" 
      />
      <span className={styles['photo-by-andrew']}>Photo by Andrew Maslov</span>
    </div>
  )
}