import React from 'react';

interface SkillListProps {
  skill: string;
}

const SkillList: React.FC<SkillListProps> = ({ skill }) => {
  return (
    <span>
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
