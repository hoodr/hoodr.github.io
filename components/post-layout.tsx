import { SitemapFooter } from "./Footer";
import Meta from "./meta";
import { Box, Main } from "grommet";

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Box align="center">
      <Meta />
      <Box>
        <Main>{children}</Main>
      </Box>
      <SitemapFooter />
    </Box>
  );
};

export default Layout;
