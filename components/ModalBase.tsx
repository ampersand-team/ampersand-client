import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export type ModalSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "full";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;

  title?: string;
  actionTitle?: string;
  subActionTitle?: string;
  onAction?: () => void;
  onSubAction?: () => void;

  size?: ModalSize;
}

function ModalBase({
  children,
  isOpen,
  title,
  actionTitle,
  subActionTitle,
  onClose,
  onAction,
  onSubAction,
  size,
}: ModalProps) {
  return (
    <Modal
      size={size}
      motionPreset="slideInBottom"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(3px) hue-rotate(90deg)"
      />
      <ModalContent borderRadius="xl">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {actionTitle || !!onAction ? (
            <Button colorScheme="blue" mr={3} onClick={onAction}>
              {actionTitle}
            </Button>
          ) : null}

          {subActionTitle || !!onSubAction ? (
            <Button colorScheme="blue" mr={3} onClick={onSubAction}>
              {subActionTitle}
            </Button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalBase;
