import React from 'react';
import { ReactComponent as ArrowMain } from './arrow_main.svg';
import './home.css';

const Home = () => {
  return (
    <div className="main">
      <div className="flex_container">
        <div className="content_container">
          <div className="heading">
            <h1>I’m Drew Hoo.<br />I‘m a Software Engineer, a Creative Technologist, and an (aspiring) UI/UX Designer.</h1>
          </div>
        </div>
        <div className="arrow-container">
          <div className="main-arrow">
            <a href="#work">
              <ArrowMain className="arrow-svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
