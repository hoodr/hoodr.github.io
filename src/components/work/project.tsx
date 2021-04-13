import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";

// import Carousel from "../ui/carousel"; TODO: Fix the carousel
import { Project as ProjectType, Asset } from "../../types/Work";
import Button from "../ui/button";
import { Box, FlexRow } from "../common/Layout";

const ProjectContainer = styled(FlexRow)({
  justifyContent: "center",
  flexWrap: "wrap",
});

const ProjectDescriptionContainer = styled(Box)({
  textAlign: "left",
  width: "100%",
  paddingRight: "2em",
  paddingLeft: "2em",
});

const ProjectDescription = ({
  project,
}: {
  project: ProjectType;
}): JSX.Element => {
  const { fields } = project;

  if (!fields) {
    return <div />;
  }

  return (
    <ProjectDescriptionContainer
      width={[1, 9 / 10, null, 3 / 10, null, null]}
      pl={[1, null, null, 4]}
    >
      <div className="project-description-title">
        <h2>{fields.name}</h2>
      </div>
      <div className="project-description-text">
        <p>{fields.shortDescription}</p>
      </div>
      <Box mt={2}>
        <Button
          {...{
            customClass: "project-button",
            cta: "Read More",
            click: () => console.log("clicked a thing"),
            linkTo: "/", // `/${fields.slug}`
          }}
        />
      </Box>
    </ProjectDescriptionContainer>
  );
};

const Project = ({
  index,
  project,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  assets,
}: {
  index: number;
  project: ProjectType;
  assets: Asset[];
}): JSX.Element => {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!project) {
    return <div />;
  }

  // TODO fix carousel
  // const projectAssetIds = project.fields.images.map((img) => img.sys.id);
  // const projectAssets = assets.filter((asset) =>
  //   projectAssetIds.includes(asset.sys.id),
  // );

  // If mobile, always set the desc below the image
  const even = size[0] < 640 ? false : index % 2 === 0;

  return (
    <ProjectContainer mb={[1, 2, 4, null, null, null, null]}>
      {even && <ProjectDescription project={project} />}
      <div className="project-images-container">
        {/* TODO */}
        {/* <Carousel items={projectAssets} /> */}
      </div>
      {!even && <ProjectDescription project={project} />}
    </ProjectContainer>
  );
};

export default Project;
