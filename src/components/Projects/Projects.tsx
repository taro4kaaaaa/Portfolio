import React from 'react'
import styles from './Projects.module.css'
import imggroup_44 from '../../assets/group-44.png'
import imggroup_70 from '../../assets/group-70.png'
import imggroup_50 from '../../assets/group-50.png'
import imggroup_68 from '../../assets/group-68.png'

interface ProjectsProps {
  className?: string
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <div id = "projects" className={`${styles['project-1']} ${className || ''}`}>
      <span className={styles['projects']}>PROJECTS</span>
      
      {/* Group 1 */}
      <div className={styles['group1']}>
        <span className={styles['a-project-demonstrating']}>
          A project demonstrating basic and advanced TypeScript features, as well as work with frameworks 
          and libraries. It covers key topics from the course curriculum: introduction to TypeScript, basic 
          type annotations, advanced typing techniques, and integration with modern frameworks and libraries. 
          The project consists of a series of hands-on assignments that reflect practical understanding of 
          TypeScript in real-world development scenarios.
        </span>
        <div className={styles['tech-stack-logos']}>
          <a 
            href="https://github.com/taro4kaaaaa/TypeScript" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['group44']} src={imggroup_44} alt="group44" />
          </a>
        </div>
      </div>

      {/* Group 2 */}
      <div className={styles['group2']}>
        <span className={styles['a-project-consisting']}>
          A project consisting of coursework and hands-on assignments focused on React development. 
          It covers key topics such as working with REST APIs, building and managing forms in React, 
          using React Hooks (including useState, useEffect, and custom hooks), and interacting with 
          the URL API. The project demonstrates practical skills in modern frontend development and 
          reflects a solid understanding of React fundamentals and real-world integration patterns.
        </span>
        <div className={styles['tech-stack-logos-1']}>
          <a 
            href="https://github.com/taro4kaaaaa/dz4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['group70']} src={imggroup_70} alt="group70" />
          </a>
        </div>
      </div>

      {/* Group 3 */}
      <div className={styles['group3']}>
        <span className={styles['a-project-consisting-1']}>
          A project consisting of coursework and hands-on assignments focused on Docker containerization. 
          It covers key topics such as working with Docker, writing Dockerfiles, and orchestrating 
          multi-container applications with Docker Compose. The project demonstrates practical skills in 
          containerization, including building custom images, managing containers, and defining services, 
          networks, and volumes. The assignments reflect a solid understanding of modern DevOps practices 
          and application deployment workflows.
        </span>
        <div className={styles['tech-stack-logos-2']}>
          <a 
            href="https://github.com/taro4kaaaaa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['group50']} src={imggroup_50} alt="group50" />
          </a>
        </div>
      </div>

      {/* Group 4 */}
      <div className={styles['group4']}>
        <span className={styles['a-project-consisting-2']}>
          A project consisting of coursework and hands-on assignments focused on core JavaScript concepts. 
          It covers key topics such as asynchronous programming, callbacks, async/await, working with cookies, 
          and destructuring. The project demonstrates practical skills in modern JavaScript development and 
          reflects a solid understanding of asynchronous operations, data handling, and browser storage mechanisms.
        </span>
        <div className={styles['tech-stack-logos-3']}>
           <a 
            href="https://github.com/taro4kaaaaa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['group68']} src={imggroup_68} alt="group68" />
          </a>

        </div>
      </div>
    </div>
  )
}