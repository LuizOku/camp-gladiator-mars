import React from "react";

import { Link } from "react-router-dom";

import { Container, Logo } from "./styles.css";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={require("../../assets/img/camp-gladiator-full.png")} />
      </Link>
    </Container>
  );
};

export default Header;
