import React from "react";

import { Navbar,Container } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">T-Shirt Shop</Navbar.Brand>
        <HeaderCartButton/>
      </Container>
    </Navbar>
  );
};

export default Header;
