import { ReactNode } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "components/Header";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

function Layout({ children, title = "ampersand" }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="ampersand client" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="full" h="full">
        <Header />
        {children}
      </Box>
    </>
  );
}

export default Layout;
