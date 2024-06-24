import styles from './ProjectsStyles.module.css';
import options from '../../assets/options.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={options}
          link="https://github.com/hhelenho/option-pricing"
          h3="Option Pricing"
          p="Finance"
        />
        <ProjectCard
          src={options}
          link="https://github.com/hhelenho/news-sentiment"
          h3="Sentiment Analysis"
          p="Finance"
        />
        <ProjectCard
          src={options}
          link="https://github.com/hhelenho/demo"
          h3="Alternative Data"
          p="Finance"
        />
      </div>
    </section>
  );
}

export default Projects;