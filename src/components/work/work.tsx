import React from "react";
import styled from "styled-components";
import ProjectComponent from "./project";
import { Work as WorkType, Project } from "../../types/Work";
import { FlexColumn } from "../common/Layout";

const WorkContainer = styled(FlexColumn)({
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "inherit",
});

const Work = ({ work }: { work: WorkType }): JSX.Element => {
  const assets = work.includes.asset;

  return (
    <WorkContainer id="work">
      {work.items.map((project: Project, index: number) => (
        <ProjectComponent
          key={project.sys.id}
          {...{ index, project, assets }}
        />
      ))}
    </WorkContainer>
  );
};

export default Work;
