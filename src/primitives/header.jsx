import React from "react";
import { Container, Link } from "../primitives";
import { main, logo, link, active } from "./header.module.css";

const Header = () => (
  <Container>
    <header className={main}>
      <Link to="/" className={logo}>
        Andreas Remdt
      </Link>
      <nav>
        <Link activeClassName={active} to="/">
          Home
        </Link>
        <Link
          className={link}
          activeClassName={active}
          partiallyActive
          to="/projects/"
        >
          Projects
        </Link>
        <Link
          className={link}
          activeClassName={active}
          partiallyActive
          to="/blog/"
        >
          Blog
        </Link>
        <Link className={link} activeClassName={active} to="/contact/">
          Contact
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
