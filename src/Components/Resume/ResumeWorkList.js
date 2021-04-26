import React from 'react';
import ResumeWork from './ResumeWork';

const ResumeWorkList = props => (
  (props.work && props.work.map(work => (
    <ResumeWork
      company={work.company}
      title={work.title}
      years={work.years}
      description={work.description}/>
))) || []);

export default ResumeWorkList;
