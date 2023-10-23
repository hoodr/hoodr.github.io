import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import StyledLink from "./link";
import { Box, Heading, Text, Paragraph } from "grommet";

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <Box>
      <Box margin={{ bottom: "medium" }}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </Box>
      <Heading
        level={2}
        color="#000000"
        margin={{ bottom: "small" }}
      >
        <StyledLink slug={slug} text={title} />
      </Heading>
      <Box margin={{ bottom: "medium" }}>
        <Text size="large" color="black">
          <DateFormatter dateString={date} />
        </Text>
      </Box>
      <Paragraph size="medium" margin={{ bottom: "large" }}>
        {excerpt}
      </Paragraph>
    </Box>
  );
};

export default PostPreview;
