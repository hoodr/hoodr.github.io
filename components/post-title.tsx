import { ReactNode } from "react";
import { Heading } from "grommet";

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  // TODO: Bold font + make it more dynamic
  return (
    <Heading
      level={1}
      color="#000000"
      size="large"
      margin={{ bottom: "medium" }}
    >
      {children}
    </Heading>
  );
};

export default PostTitle;
