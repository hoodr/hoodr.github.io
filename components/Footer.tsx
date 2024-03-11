import { useContext } from "react";
import { PiedPiper as GrommetIcon } from "grommet-icons";
import { Anchor, Box, Footer, ResponsiveContext, Text } from "grommet";

const data = [
  ["App", "beta", "sponsors", "press"],
  ["Me", "resume.pdf", "about" ],
];

const FooterContent = () =>
  data.map((item) => (
    <Box gap="small" key={item[0]}>
      <Text color="dark-2" weight="bold" size="medium">
        {item[0]}
      </Text>
      <Box>
        {[1, 2, 3].map((i) => (
          <Anchor
            key={i}
            href={`/${item[i]}`}
            size="small"
            color="brand"
            margin={{top: "small"}}
            label={item[i]}
          />
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
          justify="around"
        >
          <Box direction="row-responsive" gap="xsmall" margin={{left: "medium", right: "medium"}}>
            <Box align="center" gap="small">
              <Text alignSelf="center" color="brand" weight="bold">
                drewhoo
              </Text>
            </Box>
          </Box>
          <Box
            direction="row-responsive"
            gap="medium"
            margin={{left: "medium", right: "medium"}}
          >
            {FooterContent()}
          </Box>
        </Footer>
      )
      }
    </Box >
  );
};
