import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import Home from "../views/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
