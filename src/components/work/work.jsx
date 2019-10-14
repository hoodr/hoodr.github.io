import React from 'react';
import Project from './project';
import './work.css';

const Work = (props) => {
  const { work } = props
  const { items, includes } = work;

  let assets = includes.Asset;

  return (
    <div id="work" className="work-container">
      {items.map((project, index) => (
        <Project key={index} {...{index: index, project: project, images: assets}} />
      ))}
    </div>
  );
};


export default Work;
