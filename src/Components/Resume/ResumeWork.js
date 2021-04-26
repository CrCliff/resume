import React from 'react';

const ResumeWork = props => (
  <div key={props.company}>
    <h3>{props.company}</h3>
    <p className="info">
      {props.title}
      <span>&bull;</span>
      <em className="date">{props.years}</em>
    </p>
    <p>{props.description}</p>
  </div>
);

export default ResumeWork;