import { AppProps } from "next/app";
import Head from "next/head";
import { Grommet } from "grommet";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

const theme = {
  global: {
    colors: {
      brand: "#004225",
      tutorialBlue: "#228BE6",
      sg: "#01342c",
      sg2: "#204f32",
      brg: "#004225",
      accentYellow: "#fed401",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Grommet theme={theme} full>
      <Head>
        <title>Drew Hoo</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </Grommet>
  );
}
