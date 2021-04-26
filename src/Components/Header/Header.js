import React, { Component } from 'react';
import SocialList from '../Social/SocialList';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    if (props.data) {
      const {
        name,
        occupation,
        description,
        address,
        state,
        social
      } = props.data;

      const city = address.city;

      return {
        name,
        occupation,
        description,
        city,
        state,
        social,
      };
    }
    return {};
  }

  render() {
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {this.state.name}.</h1>
            <h3>I'm a {this.state.city} based <span>{this.state.occupation}</span>. {this.state.description}.</h3>
            <hr />
            <ul className="social">
              <SocialList socials={this.state.social}/>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
