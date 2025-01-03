import React from "react";
import Container from "../common/Container";
import Header from "./Header";
import HeaderLogo from "./HeaderLogo";
import Searchbar from "../search/Searchbar";
import { useParams } from "react-router";

const HeaderLayout = ({ search, setSearch }) => {
  const { id } = useParams();
  return (
    <div className="bg-orange-50 w-screen min-h-16 fixed top-0 left-0 right-0 z-50 ">
      <Container>
        <Header>
          <HeaderLogo />

          {!id && <Searchbar search={search} setSearch={setSearch} />}
          <div className="sm:hidden md:block"></div>
        </Header>
      </Container>
    </div>
  );
};

export default HeaderLayout;
