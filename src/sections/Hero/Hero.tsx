import styles from './HeroStyles.module.css'
import heroImg from "../../assets/headshot.png"
import themeIcon from "../../assets/sun.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import githubIcon from "../../assets/github-light.svg"
import CV from "../../assets/cv.pdf"

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className = {styles.colorModeContainer}>
        <img className={styles.hero}
      src={heroImg} 
      alt="Profile picture of Helen Ho" 
      />
      <img 
      className = {styles.collorMode}
      src={themeIcon} 
      alt="Color mode icon"
      />
        </div>
        <div className={styles.info}/>
        <h1>
          Helen
          <br />
          Ho
        </h1>
        <h2>
          Frontend Developer
        </h2>
        <span>
          <a href="https://www.linkedin.com/in/hhelenho/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon"/>
          </a>
          <a href="https://github.com/hhelenho" target="_blank">
            <img src={githubIcon} alt="Github icon"/>
          </a>
        </span>
        <p>
          Finance & Computer Science Student at New York University, Product Manager and Data Engineer
        </p>
        <a href={CV}>
          <button className="hover" download>
            Resume
          </button>
        </a>
    </section>
  )
}

export default Hero

