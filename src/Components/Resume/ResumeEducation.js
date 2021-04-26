import React from 'react';

const ResumeEducation = props => (
  <div key={props.school}>
    <h3>{props.school}</h3>
    <p className="info">
      {props.degree}
      <span>&bull;</span>
      <em className="date">{props.graduated}</em>
    </p>
    <p>
      {props.description}
    </p>
  </div>
)

export default ResumeEducation;