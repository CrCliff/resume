import React from 'react';

const TestimonialsItem = props => (
  <li key={props.user}>
    <blockquote>
      <p>{props.text}</p>
      <cite>{props.user}</cite>
    </blockquote>
  </li>
);

export default TestimonialsItem;
