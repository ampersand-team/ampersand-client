import Head from "next/head";
import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "components/Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="ampersand client" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>ampersand</title>
      </Head>
      <Flex direction="column" w="full" h="full">
        <Header />
        <Flex as="main">{children}</Flex>
      </Flex>
    </>
  );
}
