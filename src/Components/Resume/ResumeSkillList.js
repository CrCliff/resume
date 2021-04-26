import React from 'react';
import ResumeSkill from './ResumeSkill';

const ResumeSkillList = props => (
  (props.skills && props.skills.map(skill => (
    <ResumeSkill
      name={skill.name}
      level={skill.level}/>
))) || []);

export default ResumeSkillList;