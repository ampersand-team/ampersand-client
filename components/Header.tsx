import { useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  Icon,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import useToggle from "hooks/useToggle";
import { GrLogout, GrUser } from "react-icons/gr";
import LoginModal from "components/LoginModal";
import Link from "next/link";
import EmblemLogo from "components/assets/EmblemLogo";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const [isLogged, setIsLogged] = useState(true);
  const [isModalOpen, toggleModal] = useToggle(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <Flex
      h={16}
      px={10}
      align="center"
      justify="space-between"
      userSelect="none"
    >
      <Link href="/" aria-label="Ampersand, Back to Homepage">
        <EmblemLogo size={40} />
      </Link>

      {isLogged ? (
        <Menu autoSelect={false}>
          <MenuButton as={Avatar} size="sm" cursor="pointer" />

          <MenuList>
            <Flex p={3} gap={3} align="center">
              <Avatar size="sm" />
              <Flex direction="column">
                <Text fontWeight="bold">전병민</Text>
                <Text fontSize="xs">qudals7613@gmail.com</Text>
              </Flex>
            </Flex>

            <MenuDivider />

            <MenuItem icon={<Icon as={GrUser} />}>마이페이지</MenuItem>
            <MenuItem icon={<Icon as={GrLogout} />} onClick={handleLogout}>
              로그아웃
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <>
          <Button size="md" onClick={toggleModal}>
            로그인
          </Button>
          <LoginModal isOpen={isModalOpen} onClose={toggleModal} />
        </>
      )}
    </Flex>
  );
}

export default Header;
