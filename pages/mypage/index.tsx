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
import mypic from "../../picture.jpg";

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
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
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
          src={`${profileImage || mypic.src}`}
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
