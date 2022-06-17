import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Source Sans Pro, cursive",
      },
    },
  },
  colors: {
    orange: {
      400: "#e49800",
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
        fontWeight: "light",
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "Londrina Solid, cursive",
        fontWeight: "light",
        borderRadius: "12",
      },
    },
  },
});

export default theme;
