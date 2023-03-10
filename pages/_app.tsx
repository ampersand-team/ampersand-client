import { ChakraProvider } from "@chakra-ui/react";
import { Noto_Sans } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { theme } from "styles/chakra.config";
import "styles/global.css";

const notoSans = Noto_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <NextNProgress />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
