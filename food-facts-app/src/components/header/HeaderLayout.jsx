import React from "react";
import Container from "../common/Container";
import Header from "./Header";
import HeaderLogo from "./HeaderLogo";
import Searchbar from "../ui/Searchbar";

const HeaderLayout = () => {
  return (
    <div className="bg-orange-50 w-screen min-h-16 fixed">
      <Container>
        <Header>
          <HeaderLogo />
          <Searchbar />
          <div className="sm:hidden md:block"></div>
        </Header>
      </Container>
    </div>
  );
};

export default HeaderLayout;
