import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
}
