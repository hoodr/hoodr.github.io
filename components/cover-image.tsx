import Link from "next/link";
import { Box, Image as GrommetImage } from "grommet";

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {

  const image = (
    <GrommetImage
      fill={true}
      src={src}
      alt={`Cover Image for ${title}`}
    />
  );
  return (
    <Box width={{ max: "100%" }} height={{ max: "756px" }}>
      {slug ? (
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          aria-label={title}
          style={{ maxHeight: "756px" }}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </Box>
  );
};

export default CoverImage;
