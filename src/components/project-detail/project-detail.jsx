import React from "react";
// import { ReactComponent as ArrowMain } from './arrow_main.svg';
import "./project-detail.css";

const ProjectDetail = (props) => {
  const { project, assets } = props;

  const projectAssetIds = project.fields.images.map((img) => img.sys.id);
  const projectAssets = assets.filter((asset) =>
    projectAssetIds.includes(asset.sys.id),
  );

  const centerpiece = projectAssets.find(
    (img) => img.fields.title === "Centerpiece",
  );

  const releaseDate = new Date(project.fields.releaseDate);

  return (
    <div className="project-detail-container">
      <div className="image-header-container">
        <img
          className="centerpiece-img"
          src={centerpiece.fields.file.url}
          alt="centerpiece"
        />
      </div>
      <div className="content">
        <h1 className="title">
          <i>
            <b>{`${project.fields.name}, `}</b>
          </i>
          {releaseDate.getFullYear()}
        </h1>
        <h3 className="medium">{project.fields.medium}</h3>
        <h3 className="links">
          {project.fields.links.map((link) => (
            <a key={link} href={link}>
              {link}
            </a>
          ))}
        </h3>
        <p className="full-description">{project.fields.fullDescription}</p>
      </div>
      <div className="content-container" />
    </div>
  );
};

export default ProjectDetail;
