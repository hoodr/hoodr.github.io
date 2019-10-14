import React from 'react';
import { ReactComponent as Arrow } from './arrow_2.svg';
import './links.css';

const Links = (props) => {
  const { show } = props;

  let links = [
    {
      name: 'Email',
      href: '#'
    },
    {
      name: 'Resume',
      href: '#'
    },
    {
      name: 'Github',
      href: 'https://github.com/hoodr'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/drewhoo/'
    },
    {
      name: 'Stüdiohaus',
      href: 'http://studiohaus.studio/'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drew_hoo/'
    }
  ];

  return (
    <div className="links-container">
      {links.map((link, index) => (
        <a className="link"
          key={index}
          href={link.href}
          onClick={e => (link.href === '#') ? show() : null}>
          {link.name}
          <Arrow className="arrow" />
        </a>
      ))}
    </div>
  );
};


export default Links;
