import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
        fontFamily: "Source Sans Pro, cursive",
      },
    },
  },
  colors: {
    orange: {
      400: "#D68D00",
    },
    green: {
      400: "#008505",
    },
    gray: {
      100: "#D9D9D9",
      200: "#808080",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Londrina Solid, cursive",
      },
    },
  },
});

export default theme;
