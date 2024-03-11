import { Box } from "grommet";
type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <Box
      pad={{top: "small", left: "large", right: "large"}}
      width={{ min: "small", max: "xxlarge" }}
      responsive>
      {children}
    </Box>
  );
};

export default Container;
