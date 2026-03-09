import React from 'react'
import styles from './Main.module.css'
import imgslice_4_1 from '../../assets/slice-4-1.png'
import imgslice_5_1 from '../../assets/slice-5-1.png'
import imgslice_6_1 from '../../assets/slice-6-1.png'

interface MainProps {
  className?: string
}

export const Main: React.FC<MainProps> = ({ className }) => {

  return (
    <div className={`${styles['main']} ${className || ''}`}>
      <span className={styles['im-konstantin-tarasov']}>
        I'M KONSTANTIN TARASOV<br />FRONTEND-DEVELOPER
      </span>
      
      {/* Блок 1 - Montessori Assistant Teacher */}
      <span className={styles['montessori-assistant']}>
        1               Montessori<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assistant Teacher<br />
        2021-2022
      </span>
      
      {/* Блок 2 - Computer Science Teacher */}
      <span className={styles['computer-science']}>
        2             Computer<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp; Science              Teacher<br />
        Coder         Programming<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;School<br />
        &nbsp;&nbsp;&nbsp;2022-2025
      </span>
      
      {/* Блок 3 - Information Technology Engineer */}
      <span className={styles['information-technology']}>
        3                                       Information<br />
        &nbsp;Technology Engineer<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Belgorodsky Cement (JSC)<br />
        2022-2025
      </span>
      
      <a href="#about" className={styles['about-me']}>About me</a>
      <a href="#projects" className={styles['project']}>Projects</a>
      <a href="#contacts" className={styles['contact']}>Contacts</a>
      <img className={styles['slice41']} src={imgslice_4_1} alt="slice41" />
      <img className={styles['slice51']} src={imgslice_5_1} alt="slice51" />
      <img className={styles['slice61']} src={imgslice_6_1} alt="slice61" />
    </div>
  )
}