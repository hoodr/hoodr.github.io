import PostPreview from "./post-preview";
import { Post } from "../types";
import { Box, Grid, Heading } from "grommet";

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <Box>
      <Heading level={2} color="#000000" size="medium" weight="bold">
        More Posts
      </Heading>
      <Grid
        columns={{
          count: 2,
          size: "small",
        }}
        gap="medium"
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default MoreStories;
