import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SearchResultsPage from "./pages/SearchResultsPage";
import NotFound from "./pages/NotFound";
import HotelDetails from "./pages/HotelDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searchresults" element={<SearchResultsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/hoteldetail" element={<HotelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
