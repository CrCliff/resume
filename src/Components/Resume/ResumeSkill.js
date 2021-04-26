import React from 'react';

const ResumeSkill = props => (
  <li key={props.name}>
    <span style={{ width: props.level }}
      className={'bar-expand ' + props.name.toLowerCase()}>
    </span>
    <em>{props.name}</em>
  </li>
);

export default ResumeSkill;