import React from 'react';
import ResumeEducation from './ResumeEducation';

const ResumeEducationList = props => (
  (props.education && props.education.map(education => (
    <ResumeEducation 
      school={education.school}
      degree={education.degree}
      graduated={education.graduated}
      description={education.description}/>
))) || []);

export default ResumeEducationList;