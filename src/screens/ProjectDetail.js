import React from 'react';
import ProjectDetailComponent from '../components/project-detail';
import './screen.css';

const ProjectDetail = (props) => {
  const { project } = props;

  if (Object.entries(project).length === 0) {
    return null;
  }

  return (
    <div className="project-detail-screen-container">
      <ProjectDetailComponent {...props} />
    </div>
  );
};

export default ProjectDetail;
