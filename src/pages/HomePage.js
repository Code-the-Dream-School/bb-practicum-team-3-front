import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";

export default function HomePage() {
  return (
    <Box>
      <Header />
      <SearchForm />
      <ImageGrid />
      <Footer />
    </Box>
  );
}
