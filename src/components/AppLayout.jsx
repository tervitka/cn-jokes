import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JokeListPage } from "./JokeListPage";

export function AppLayout() {
  return (
    <>
      <Header />
      <JokeListPage />
      <Footer />
    </>
  );
}
