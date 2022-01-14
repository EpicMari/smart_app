import React from "react";
import NavigationBar from "../../molecules/NavigationBar";

const Navigation = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Navigation;
