import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import { HeaderAlt } from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/post-layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { Post } from "../../types";
import { Box } from "grommet";

type Props = {
  post: Post
  morePosts: Post[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Working Title`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Box>
      <Layout preview={preview}>
        <Container>
          <HeaderAlt />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <Box margin={{ bottom: "large" }}>
              <Head>
                <title>{title}</title>
                <meta
                  property="og:image"
                  content={post.ogImage.url}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </Box>
          )}
        </Container>
      </Layout>
    </Box>
  );
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post: Post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
