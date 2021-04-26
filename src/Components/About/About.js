import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    if (props.data) {
      return {
        name: props.data.name,
        profilepic: "images/"+props.data.image,
        bio: props.data.bio,
        street: props.data.address.street,
        city: props.data.address.city,
        state: props.data.address.state,
        zip: props.data.address.zip,
        phone: props.data.phone,
        email: props.data.email,
        resumeDownload: props.data.resumedownload,
      };
    }
    return {};
  }

  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={this.state.profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{this.state.bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{this.state.name}</span><br />
						   <span>{this.state.street}<br />
						         {this.state.city} {this.state.state}, {this.state.zip}
                   </span><br />
						   <span>{this.state.phone}</span><br />
                     <span>{this.state.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={this.state.resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
