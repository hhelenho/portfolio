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
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="JavaScript" />
        <SkillList skill="TypeScript" />
        <SkillList skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Redux" />
        <SkillList skill="Webpack" />
        <SkillList skill="Git" />
        <SkillList skill="Jest" />
        <SkillList skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;