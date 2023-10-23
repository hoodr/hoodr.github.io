import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import { Box, Grid, Heading, Text, Paragraph } from "grommet";
import StyledLink from "./link";

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <Box>
      <Box margin={{bottom: "medium"}}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </Box>
      <Grid
        columns={{
          count: 2,
          size: "auto",
        }}
        gap="medium">
        <Box>
          <Heading level={2} color="#000000">
            <StyledLink slug={slug} text={title} />
          </Heading>
          <Box margin={{ bottom: "small" }}>
            <Text size="large" color="black">
              <DateFormatter dateString={date} />
            </Text>
          </Box>
        </Box>
        <Box>
          <Paragraph size="large">{excerpt}</Paragraph>
        </Box>
      </Grid>
    </Box>
  );
};

export default HeroPost;
