import React from "react";
import { css } from "@emotion/core";
import { Container } from "../primitives";
import { SocialIcons } from "../components";

const Footer = () => (
  <footer
    css={css`
      background-color: var(--medium-light-yellow);
      padding: 2rem 0;
      margin-top: 6rem;
    `}
  >
    <Container
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <p>Powered by Gatsby.</p>
      <SocialIcons />
    </Container>
  </footer>
);

export default Footer;
