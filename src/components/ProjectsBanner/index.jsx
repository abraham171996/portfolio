import React from 'react'
import styles from './projectsBanner.module.scss'
import { projects } from '../../mock/projects'
import { Link } from 'react-router-dom';

const ProjectsBanner = () => {
  console.log(projects);
  return (
    <div className={styles.ProjectsBanner}>
      <h2>My Projects</h2>
      <div className={styles.ProjectsBanner__cards}>
        {projects && projects.map((item, index) => (
          <div key={`${item}_${index}`} className={styles.ProjectsBanner__cards__card}>
            <Link to={item.to} target='_blank'>
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <h4>{item.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsBanner
