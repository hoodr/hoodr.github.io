import Link from "next/link";
import { Anchor } from "grommet";

type Props = {
  slug: string
  text: string
}

const StyledLink = ({ slug, text }: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      passHref
      legacyBehavior
    >
      <Anchor color="inherit">{text}</Anchor>
    </Link>
  );
};

export default StyledLink;
