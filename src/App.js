import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/searchresults" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
