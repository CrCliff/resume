import React from 'react';

const Social = props => (
  <li key={props.name}>
    <a href={props.url}>
      <i className={props.className}></i>
    </a>
  </li>
);

export default Social;