import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="Python" />
        <SkillList skill="Java" />
        <SkillList skill="TypeScript" />
        <SkillList skill="C" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="AWS" />
        <SkillList skill="Terraform" />
        <SkillList skill="Git" />
        <SkillList skill="React" />
        <SkillList skill="Jira" />
      </div>
    </section>
  );
}

export default Skills;