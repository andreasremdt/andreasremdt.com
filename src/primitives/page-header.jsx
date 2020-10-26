import React from "react";
import { css } from "@emotion/core";
import { Container } from "../primitives";

const PageHeader = ({ title, subtitle }) => (
  <header
    css={css`
      max-width: 1720px;
      margin: 0 auto;
      background-color: var(--light-yellow);
      border-radius: 1rem;
      height: 300px;
      display: flex;
      margin-bottom: 6rem;
    `}
  >
    <Container
      css={css`
        text-align: center;
      `}
    >
      <h1
        css={css`
          margin: unset;
          font-size: 3rem;
        `}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          css={css`
            margin-bottom: unset;
            font-size: 1.2rem;
          `}
        >
          {subtitle}
        </p>
      )}
    </Container>
  </header>
);

export default PageHeader;
