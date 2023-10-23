import { useContext } from "react";
import { PiedPiper as GrommetIcon } from "grommet-icons";
import { Anchor, Box, Footer, ResponsiveContext, Text } from "grommet";

const data = [
  ["App", "home", "beta", "sponsors"],
  ["Legal", "terms", "privacy", "security"],
  ["Company", "about", "press", "jobs"],
];

const FooterAnchor = ({ ...rest }) => (
  <Anchor href="/" size="small" color="brand" {...rest} />
);

const FooterContent = () =>
  data.map((item) => (
    <Box gap="medium" key={item[0]}>
      <Text color="dark-2" weight="bold" size="small">
        {item[0]}
      </Text>
      <Box>
        {[1, 2, 3].map((i) => (
          <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
        ))}
      </Box>
    </Box>
  ));

export const SitemapFooter = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box width="100%">
      {size === "small" ? (
        // TODO: add mobile menu here
        <Footer background="light-4" pad="large">
          <Box direction="row-responsive" gap="xsmall">
            <Box align="center" gap="small">
              <Text alignSelf="center" color="brand" weight="bold">
                drewhoo
              </Text>
            </Box>
          </Box>
          {FooterContent()}
        </Footer>
      ) : (
        <Footer
          background="light-4"
          pad={{
            left: "xlarge",
            right: "xlarge",
            top: "large",
            bottom: "medium"
          }}
        >
          <Box direction="row-responsive" gap="xsmall">
            <Box align="center" gap="small">
              <Text alignSelf="center" color="brand" weight="bold">
                drewhoo
              </Text>
            </Box>
          </Box>
          {FooterContent()}
        </Footer>
      )
      }
    </Box >
  );
};
