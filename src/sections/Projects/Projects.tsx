import styles from './ProjectsStyles.module.css';
import options from '../../assets/options.png';
import restaurant from '../../assets/restaurant.png';
import coffee from '../../assets/coffee.png';
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
          src={restaurant}
          link="https://github.com/hhelenho/reservation-app"
          h3="Reservation App"
          p="Consumers"
        />
        <ProjectCard
          src={coffee}
          link="https://github.com/hhelenho/coffee-suggestion"
          h3="Coffee Suggestion"
          p="Leisure"
        />
      </div>
    </section>
  );
}

export default Projects;