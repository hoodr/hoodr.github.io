import { useContext } from "react";
import {
  Anchor,
  Box,
  Button,
  Header as GrommetHeader,
  Menu,
  ResponsiveContext,
  Heading,
} from "grommet";
import {
  PiedPiper as GrommetIcon,
  Menu as MenuIcon,
} from "grommet-icons";
import Link from "next/link";

export const HeaderAlt = () => {
  return (
    <Heading
      level={2}
      size="large"
      color="#000000"
      weight="bold"
      margin={{
        top: "medium",
        bottom: "large"
      }}
    >
      <Link href="/" passHref legacyBehavior>
        <Anchor color="inherit">Drew Hoo</Anchor>
      </Link>
    </Heading>
  );
};

const Header = () => {
  const size = useContext(ResponsiveContext);

  return (
    <GrommetHeader background="brg" pad="medium" height="xsmall">
      <Anchor
        href="/"
        //icon={<GrommetIcon size="large" />}
        label="Drew Hoo"
        color="white"
      />
      {size === "small" ? (
        <Box justify="end">
          <Menu
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: "bottom", right: "right" } }}
            icon={<MenuIcon color="brand" />}
            items={[
              {
                label: <Box pad="small">Login</Box>,
                href: "/contact",
              },
              {
                label: <Box pad="small">Sign up</Box>,
                href: "/idk",
              },
            ]}
          />
        </Box>
      ) : (
        <Box justify="end" direction="row" gap="medium">
          <Box direction="row" gap="small">
            <Button label="contact" />
          </Box>
        </Box>
      )}
    </GrommetHeader>
  );
};

export default Header;
