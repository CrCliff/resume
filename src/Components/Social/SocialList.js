import React from 'react';
import Social from './Social';

const SocialList = props => (
  (props.socials && props.socials.map(social => (
    <Social
      name={social.name}
      url={social.url}
      className={social.className}/>
))) || []);

export default SocialList;