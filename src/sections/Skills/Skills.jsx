import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList.jsx';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import {useTheme} from '../../common/ThemeContext';



function Skills() {
  const {theme, toggleTheme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='Javascript'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='React'/>
            <SkillList src={checkMarkIcon} skill='BootStrap'/>
            <SkillList src={checkMarkIcon} skill='Git & Github'/>
            <SkillList src={checkMarkIcon} skill='TailWind CSS'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='C++'/>
            <SkillList src={checkMarkIcon} skill='MySql'/>
            <SkillList src={checkMarkIcon} skill='Data Structures & Algorithms'/>
            <SkillList src={checkMarkIcon} skill='Object Oriented Programming'/>
        </div>
    </section>
  )
}

export default Skills;