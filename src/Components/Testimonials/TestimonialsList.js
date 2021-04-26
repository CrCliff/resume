import React from 'react';
import TestimonialsItem from './TestimonialsItem';

const TestimonialsList = props => (
  (props.testimonials && props.testimonials.map(testimonial => (
    <TestimonialsItem
      user={testimonial.user}
      text={testimonial.text}/>
))) || []);

export default TestimonialsList;