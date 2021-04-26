import React, { Component } from 'react';
import SocialList from '../Social/SocialList';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    if (props.data) {
      const {
        social,
      } = props.data;

      return {
        social,
      };
    }
    return {};
  }

  render() {
    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <SocialList socials={this.state.social} />
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
