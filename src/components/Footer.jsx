import { Box, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      as="footer"
      bg="white"
      boxShadow="-4px -4px 4px rgba(0, 0, 0, 0.25)"
      padding="15px"
      mt="35px"
    >
      <Text>Made with love, sweat and tears</Text>
      <Text>&copy; Zelenka &amp; Vítková</Text>
    </Box>
  );
}
