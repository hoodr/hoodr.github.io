import React, { useLayoutEffect, useState } from 'react';
import Carousel from '../ui/carousel';
import ProjectDescription from './project-description';
import './project.css';

const Project = (props) => {
  const { index, project, images } = props;
  const [size, setSize] = useState([0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (!project) {
    return null;
  }

  let projectAssetIds = project.fields.images.map(img => img.sys.id)
  let projectAssets = images.filter(asset => projectAssetIds.includes(asset.sys.id))

  // If mobile, always set the desc below the image
  let even = (size < 736) ? false : (index % 2 === 0);

  let description = (
    <div className="project-description-container">
      <ProjectDescription {...project} />
    </div>
  );

  return (
    <div className="project-container">
      {even && description}
      <div className="project-images-container">
        <Carousel items={projectAssets} />
      </div>
      {!even && description}
    </div>
  );
};

export default Project;
