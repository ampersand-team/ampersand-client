import "../styles/global.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Noto_Sans } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

const colors = {};

const theme = extendTheme({ colors });

const notoSans = Noto_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={notoSans.className}>
        <NextNProgress />
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
