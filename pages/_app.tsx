import { ChakraProvider } from "@chakra-ui/react";
import { Noto_Sans } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { theme } from "styles/chakra.config";
import "styles/global.css";
import { Layout } from "components/Layout";

const notoSans = Noto_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSans.className}>
      <NextNProgress options={{ showSpinner: false }} color="#e3e3e3" />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </div>
  );
}
