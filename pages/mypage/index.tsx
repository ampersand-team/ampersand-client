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

import { useEffect, useRef, useState } from "react";
import defaultImage from "../../public/favicon.ico";

interface IUserInformation {
  nickname: string;
  email: string;
  profileImage: string;
}

export default function MyPage() {
  const [settable, isSettable] = useState(false);
  const [userInformation, setUserInformation] = useState<IUserInformation>({
    nickname: "example",
    email: "example@gmail.com",
    profileImage: defaultImage.src,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // TODO: 서버에서 정보 가져오기
    // const information = getUserInformation();
    // setUserInformation(information);
  }, []);
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
          setUserInformation({
            ...userInformation,
            profileImage: e.target.result.toString(),
          });
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
          src={userInformation.profileImage}
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
            <Input
              placeholder={userInformation.nickname}
              width="70%"
              marginLeft="10px"
            />
          </WrapItem>
          <WrapItem>
            <Text fontSize="xl">이메일 : </Text>
            <Input
              placeholder={userInformation.email}
              width="70%"
              marginLeft="10px"
            />
          </WrapItem>
          <WrapItem
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            gap={2}
          >
            <Button
              width="100%"
              onClick={() => {
                // TODO: 서버에 정보 업데이트
                alert("완료되었습니다.");
              }}
            >
              완료
            </Button>
            <Button
              backgroundColor="red.500"
              _hover={{ opacity: 0.8 }}
              width="100%"
              onClick={() => {
                // TODO: 서버에 회원탈퇴 요청
                if (window.confirm("정말로 탈퇴하시겠습니까?")) {
                  alert("탈퇴되었습니다.");
                }
              }}
            >
              회원탈퇴
            </Button>
          </WrapItem>
        </Wrap>
      </Flex>
    </Layout>
  );
}
