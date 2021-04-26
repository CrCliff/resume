import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    if (props.data) {
      const {
        projects,
      } = props.data;

      return {
        projects,
      };
    }
    return {};
  }

  render() {
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {this.state.projects && this.state.projects.map(this.formatProject)}
            </div>
          </div>
      </div>
   </section>
    );
  }

  formatProject(project) {
    return (
     <div key={project.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={project.url} title={project.title}>
              <img alt={project.title} src={'images/portfolio/'+project.image} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                    <p>{project.category}</p>
                </div>
              </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
