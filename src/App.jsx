import React, { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Country from "./pages/country/Country"
import Movie from "./pages/movie/Movie"
import NotFound from "./pages/not-found/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Country />} />
          <Route path="/movie" element={<Movie />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(App);