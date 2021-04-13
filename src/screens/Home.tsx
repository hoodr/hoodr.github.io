import React from "react";
import styled from "styled-components";

// import LoadingIcon from "../components/ui/loadingIcon";
import { Work } from "../types/Work";
import ArrowMain from "../assets/arrow_main.svg";
import { Box, FlexColumn } from "../components/common/Layout";
import WorkComponent from "../components/work";

const LandingScreen = styled(FlexColumn)({
  position: "relative",
  height: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

// const LandingContent = styled(Box)({});

const Home = ({ work }: { work: Work }): JSX.Element => {
  return (
    <Box>
      <LandingScreen>
        <Box marginTop="20vh" color="white">
          {/* formerly content_container */}
          <Box fontWeight="bold" textAlign="left">
            <h1>I’m Drew Hoo.</h1>
            <h1>I‘m a Software Engineer.</h1>
          </Box>
        </Box>
        <Box
          mt={["15vh", "10vh", null, null, null, null]}
          className="main-arrow"
        >
          <a href="#work">
            <img src={ArrowMain} className="arrow-svg" alt="arrow down" />
          </a>
        </Box>
      </LandingScreen>
      <WorkComponent work={work} />
    </Box>
  );
};

export default Home;
