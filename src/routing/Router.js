import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../components/templates/Navigation";
import { routes } from "../routes";
import Home from "../views/Home";
import AddRoom from "../views/AddRoom";
import RemoveRoom from "../views/RemoveRoom";
import SetTimer from "../views/SetTimer";
import Settings from "../views/Settings";
import SingleRoom from "../views/SingleRoom";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
          <Route path={routes.addRoom} element={<AddRoom />} />
          <Route path={routes.removeRoom} element={<RemoveRoom />} />
          <Route path={routes.setTimer} element={<SetTimer />} />
          <Route path={routes.settings} element={<Settings />} />
          <Route path={routes.singleRoom} element={<SingleRoom />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;
