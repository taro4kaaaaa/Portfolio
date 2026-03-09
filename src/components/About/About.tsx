import React from 'react'
import styles from './About.module.css'
import imgfullsizerender_2_1 from '../../assets/fullsizerender-2-1.png'

interface AboutProps {
  className?: string
}

export const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div id = "about" className={`${styles['about']} ${className || ''}`}>
      <span className={styles['about-me-1']}>ABOUT ME</span>
      <span className={styles['education']}>EDUCATION</span>
      <span className={styles['text']}></span>
      <span className={styles['im-afrontend']}>
        I'm a frontend developer with a keen eye for detail and a passion for building responsive, 
        user-centered interfaces. With a strong foundation in modern JavaScript, React, and performance 
        optimization, I turn designs into fast, accessible, and scalable web experiences. I bring structure, 
        clean code, and a collaborative mindset to every project — and I'm always exploring new tools and 
        technologies. Currently diving deeper into animation and interactive design to make interfaces not 
        just functional, but engaging.
      </span>
      <span className={styles['belgorod-state-technological']}>
        Belgorod State Technological University named after V.G. Shukhov<br />
        Specialist degree in Fire Safety<br />
        2020–2026<br /><br />
        Moscow University for Industry and Finance «Synergy»<br />
        Frontend Development Program<br />
        2025-2026
      </span>
      <img className={styles['fullsizerender21']} src={imgfullsizerender_2_1} alt="fullsizerender21" />
    </div>
  )
}