import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    py: "0.325rem",
    px: "0.325rem",
    borderRadius: "lg",
    boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.1)",
    border: "none",
  },

  item: {
    borderRadius: "lg",
    fontSize: "md",
    py: "2",
    px: "4",
    _hover: {
      bg: "gray.100",
    },
    _focus: {
      bg: "gray.200",
    },
  },

  groupTitle: {},

  divider: {
    borderColor: "gray.300",
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
