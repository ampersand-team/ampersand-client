import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import Layout from "components/Layout";
import { useRef, useState } from "react";
import defaultImage from "../../public/favicon.ico";

export default function MyPage() {
  const [settable, isSettable] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const imageClick = () => {
    if (inputRef.current) inputRef.current.click();
  };
  const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
        }
      };
    }
  };
  return (
    <Layout>
      <Flex flexDirection="column" align="center" marginTop="30px" gap="20px">
        <Heading as="h1" size="xl" noOfLines={1}>
          내 정보
        </Heading>
        <Image
          borderRadius="full"
          boxSize="200px"
          ref={imageRef}
          onClick={imageClick}
          src={`${profileImage || defaultImage.src}`}
          alt="프로필 이미지"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          backgroundPosition="center"
          backgroundSize="cover"
        />
        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={imageChange}
          style={{ display: "none" }}
        />
        <Wrap width="300px" display="flex" flexDirection="column">
          <WrapItem>
            <Text fontSize="xl">닉네임 : </Text>
            <Input placeholder="히터빵" width="70%" marginLeft="10px" />
          </WrapItem>
          <WrapItem
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            gap={2}
          >
            <Button width="100%">완료</Button>
            <Button
              backgroundColor="red.500"
              _hover={{ opacity: 0.8 }}
              width="100%"
            >
              회원탈퇴
            </Button>
          </WrapItem>
        </Wrap>
      </Flex>
    </Layout>
  );
}
