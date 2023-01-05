import { Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "components/Layout";

export default function MyPage() {
  return (
    <Layout>
      <Flex flexDirection="column" align="center" marginTop="30px">
        <Heading as="h1" size="xl" noOfLines={1}>
          내 정보
        </Heading>
      </Flex>
    </Layout>
  );
}
