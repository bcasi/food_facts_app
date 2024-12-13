import React from "react";
import Container from "../common/Container";

const Header = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      {children}
    </div>
  );
};

export default Header;
