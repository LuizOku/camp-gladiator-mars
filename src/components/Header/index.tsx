import React from "react";

import { Link } from "react-router-dom";

import { Container, Logo } from "./styles.css";

const Header = ({ testId }: { testId?: string }) => {
  return (
    <Container data-testid={testId}>
      <Link to="/">
        <Logo
          data-testid="header-logo-img"
          src={require("../../assets/img/camp-gladiator-full.png")}
        />
      </Link>
    </Container>
  );
};

export default Header;
