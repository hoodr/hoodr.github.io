import React from "react";
import styled, { keyframes } from "styled-components";
import ArrowSrc from "./arrow_2.svg";
import { FlexColumn, FlexRow } from "../common/Layout";

const slideKf = keyframes`
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(15px, 0);
  }
`;

const FooterContainer = styled(FlexRow)({
  textAlign: "left",
  flexFlow: "wrap",
  justifyContent: "space-between",
});

const About = styled(FlexColumn)({});

const LinkContainer = styled(FlexColumn)({});

const Link = styled.a`
  margin: 0 0.5em 1em 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Arrow = styled.img`
  margin-right: 2em;
  margin-left: 2em;

  ${Link}:hover & {
    animation: ${slideKf} 1s ease-in-out infinite;
  }
`;

// const tmp = styled.div<{ active: boolean }>(({ active }) => ({
//   display: active ? "block" : "none",
// }));

const Footer = (): JSX.Element => (
  <FooterContainer
    m={3}
    pl={[1, 1, 1, 4, 5, null, null]}
    pr={[1, 1, 1, 4, 5, null, null]}
  >
    <About p={2} width={[1 / 2, null, 2 / 5, null, null, null, null]}>
      <h3>About me:</h3>
      <p>
        I’m a 25 year old software engineer currently at Negotiatus. In my spare
        time I like to run away from the web side of thing and write Rust for
        computer graphics and computer vision projects. I am also the co-founder
        and Creative Technologist at Studiohaus. I like to make things for the
        internet, and if you do too, get in touch!
      </p>
    </About>
    <LinkContainer>
      <Link href="mailto:drewhoo.8@gmail.com">
        Email
        <Arrow src={ArrowSrc} />
      </Link>
      <Link href="https://github.com/hoodr/hoodr.github.io/blob/master/resume.pdf">
        Resume
        <Arrow src={ArrowSrc} />
      </Link>
      <Link href="https://github.com/hoodr">
        Github
        <Arrow src={ArrowSrc} />
      </Link>
      <Link href="https://www.linkedin.com/in/drewhoo/">
        LinkedIn
        <Arrow src={ArrowSrc} />
      </Link>
      <Link href="http://studiohaus.studio/">
        Stüdiohaus
        <Arrow src={ArrowSrc} />
      </Link>
      <Link href="https://www.instagram.com/drew_hoo/">
        Instagram
        <Arrow src={ArrowSrc} />
      </Link>
    </LinkContainer>
  </FooterContainer>
);

export default Footer;
