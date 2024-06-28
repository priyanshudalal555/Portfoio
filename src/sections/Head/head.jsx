import styles from './headStyles.module.css';
import heroImg from '../../assets/hero-img2.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext';

function head() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return <section id="head" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={heroImg} alt="Profile Picture of Priyanshu Dalal" />
      <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
        <h1>Priyanshu<br /> Dalal</h1>
        <h2>C++ and Front End Developer</h2>
        <span>
          <a href="https://linkedin.com/priyanshud555" target='_blank'>
            <img className='hover' src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/priyanshud555" target='_blank'>
            <img className='hover' src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://twitter.com/priyanshud555" target='_blank'>
            <img className='hover' src={twitterIcon} alt="Twitter Icon" />
          </a>
        </span>
        <p className={styles.description}>Front End developer in Meerut, India, passionate about coding skills and C++ development.</p>
        <a href="https://drive.google.com/file/d/181dyxCLXhW4RNZRfLezmION66oh3DBJ7/view" target='_blank'>
          <button className="hover">Resume</button>
        </a>
    </div>
  </section>
}

export default head;