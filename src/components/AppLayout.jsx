
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@chakra-ui/react";

export function AppLayout( { children }) {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
}
