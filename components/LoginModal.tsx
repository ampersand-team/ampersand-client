import { Icon, Button, Center, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import Image from "next/image";
import ModalBase from "components/ModalBase";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <ModalBase size="xl" isOpen={isOpen} onClose={onClose}>
      <Center my={3} gap={3}>
        <Image src="/logo.svg" width={200} height={40} alt="logo" />
      </Center>

      <Center flexDirection="column">
        <Text color="gray.900">
          로그인을 해서 스터디를 만들고, 참여하고, 관리해보세요!
        </Text>
      </Center>

      <Center mt={12} mb={8} gap={4} w="full">
        <Button
          size="lg"
          leftIcon={<Icon as={FcGoogle} />}
          borderRadius="2xl"
          fontSize="md"
          bgColor="white"
          p={8}
          boxShadow="lg"
          _hover={{ bgColor: "gray.100" }}
          _active={{ bgColor: "gray.200" }}
        >
          Google
        </Button>
        <Button
          p={8}
          size="lg"
          leftIcon={<Icon as={BsGithub} color="white" />}
          borderRadius="2xl"
          fontSize="md"
          bgColor="gray.800"
          color="white"
          boxShadow="lg"
          _hover={{ bgColor: "gray.700" }}
          _active={{ bgColor: "gray.600" }}
        >
          Github
        </Button>
        <Button
          p={8}
          size="lg"
          leftIcon={<Icon as={RiKakaoTalkFill} />}
          borderRadius="2xl"
          fontSize="md"
          bgColor="yellow.300"
          boxShadow="lg"
          _hover={{ bgColor: "yellow.400" }}
          _active={{ bgColor: "yellow.500" }}
        >
          Kakao
        </Button>
      </Center>

      <Center my={4} flexDirection="column">
        <Text fontSize="sm" color="gray.600">
          로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
        </Text>
        <Text fontSize="sm" color="gray.600">
          서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
        </Text>
      </Center>
    </ModalBase>
  );
}
