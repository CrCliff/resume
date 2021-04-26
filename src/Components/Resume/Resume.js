import React, { Component } from 'react';
import ResumeEducationList from './ResumeEducationList';
import ResumeWorkList from './ResumeWorkList';
import ResumeSkillList from './ResumeSkillList';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    if (props.data) {
      const {
        skillmessage,
        education,
        work,
        skills,
      } = props.data;

      return {
        skillmessage,
        education,
        work,
        skills,
      };
    }
  }

  render() {

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <ResumeEducationList education={this.state.education} />
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            <ResumeWorkList work={this.state.work} />
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>
              {this.state.skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                <ResumeSkillList skills={this.state.skills} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
