import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Layout from "components/Layout";
import { useRef, useState } from "react";

export default function MyPage() {
  const [settable, isSettable] = useState(false);
  const inputRef = useRef(null);

  return (
    <Layout>
      <Flex flexDirection="column" align="center" marginTop="30px" gap="20px">
        <Heading as="h1" size="xl" noOfLines={1}>
          내 정보
        </Heading>
        <Button
          width="200px"
          height="200px"
          borderRadius="50%"
          onClick={() => inputRef.current.click()}
        >
          <Input
            type="file"
            ref={inputRef}
            display="none"
            accept="image/*"
            onChange={(e) => {
              console.log(e);
            }}
          />
        </Button>
        {/* <Wrap>
          <WrapItem width="500px">
            <Text fontSize="xl">닉네임 : </Text>
            <Input placeholder="히터빵" size="md" />
          </WrapItem>
        </Wrap> */}
      </Flex>
    </Layout>
  );
}
