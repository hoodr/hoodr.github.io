import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { Box, Text } from "grommet";

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <Box>
      <PostTitle>{title}</PostTitle>
      <Box margin={{ bottom: "medium" }}>
        <Text size="large" color="black">
          <DateFormatter dateString={date} />
        </Text>
      </Box>
      <Box margin={{ bottom: "medium" }} responsive>
        <CoverImage title={title} src={coverImage} />
      </Box>
    </Box>
  );
};

export default PostHeader;
