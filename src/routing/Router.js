import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../components/templates/Navigation";
import { routes } from "../routes";
import Home from "../views/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path={routes.home} element={<Home />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;
