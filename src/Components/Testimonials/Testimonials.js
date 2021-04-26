import React, { Component } from 'react';
import TestimonialsList from './TestimonialsList';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    if (props.data) {
      const {
        testimonials,
      } = props.data;

      return {
        testimonials,
      };
    }
  }

  render() {
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                    <TestimonialsList testimonials={this.state.testimonials}/>
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
