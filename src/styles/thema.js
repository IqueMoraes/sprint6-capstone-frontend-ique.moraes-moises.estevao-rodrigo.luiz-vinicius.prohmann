import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#27AE60",
      200: "#219653",
    },
    secondary: {
      100: "#EB5757",
    },
    grey: {
      900: "#111",
      600: "#333333",
      300: "#828282",
      100: "#E0E0E0",
      0: "#F5F5F5",
    },
    bg: {
      100: "#DB7483",
      200: "#5F4D93",
    },
    negative: {
      100: "#E60000",
    },
    warning: {
      100: "#FFCD07",
    },
    sucess: {
      100: "#168821",
    },
    information: {
      100: "#155BCB",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    styles: {
      global: {
        body: {
          bg: "white",
          color: "gray.900",
        },
      },
    },
  },
});
