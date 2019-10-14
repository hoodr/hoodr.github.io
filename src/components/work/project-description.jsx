import React from 'react';
import Button from '../ui/button';
import './project-description.css';

const ProjectDescription = (props) => {
  const { fields } = props;

  if (!fields) {
    return null;
  }

  return (
    <div className="project-description">
      <div className="project-description-title">
        <h2>{fields.name}</h2>
      </div>
      <div className="project-description-text">
        <p>{fields.shortDescription}</p>
      </div>
      <div className="project-description-button">
        <Button {...{customClass: "project-button", cta: "Read More", click:(e => console.log(e)), linkTo: "/" + fields.slug}} />
      </div>
    </div>
  )
};

export default ProjectDescription;
