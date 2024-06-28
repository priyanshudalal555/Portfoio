import React from 'react';
import styles from './ProjectsStyles.module.css';
import weather from '../../assets/Weather_Logo.png';
import Shortner from '../../assets/Url_logo.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <a href="https://github.com/priyanshudalal555/WeatherApp" target='_blank'>
                <img src={weather} alt="Weather_Project_Github_Link" />
                <h3>Weather App</h3>
            </a>
            <a href="https://github.com/priyanshudalal555/UrlShortner" target='_blank'>
                <img src={Shortner} alt="UrlShortner_Project_Github_Link" />
                <h3>Url Shortner</h3>
            </a>
        </div>
    </section>
  )
}

export default Projects;