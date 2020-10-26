import React from "react";
import { css } from "@emotion/core";
import { Container, Link } from "../primitives";

const Header = () => (
  <Container>
    <header
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px;
      `}
    >
      <Link
        to="/"
        css={css`
          font-weight: bold;
        `}
      >
        Andreas Remdt
      </Link>
      <nav>
        <Link activeClassName="current-page" to="/">
          Home
        </Link>
        <Link
          css={css`
            margin-left: 1.5rem;
          `}
          activeClassName="current-page"
          partiallyActive
          to="/projects/"
        >
          Projects
        </Link>
        <Link
          css={css`
            margin-left: 1.5rem;
          `}
          activeClassName="current-page"
          partiallyActive
          to="/blog/"
        >
          Blog
        </Link>
        <Link
          css={css`
            margin-left: 1.5rem;
          `}
          activeClassName="current-page"
          to="/contact/"
        >
          Contact
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
