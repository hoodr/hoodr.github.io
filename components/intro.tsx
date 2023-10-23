import { Box, Heading } from "grommet";

const Intro = () => {
  return (
    <Box flex direction="row" align="center" justify="between" margin={{ top: "medium", bottom: "medium" }} >
      <Heading level={1} size="large" weight="bold">
        Drew Hoo
      </Heading>
      <Heading level={4} size="medium">
        A total hackjob of a blog
      </Heading>
    </Box>
  );
};

export default Intro;
