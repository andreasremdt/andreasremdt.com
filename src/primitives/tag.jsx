import React from "react";
import { css } from "@emotion/core";

const Tag = (props) => (
  <span
    css={css`
      text-transform: uppercase;
      margin-right: 0.5rem;
      font-weight: bold;
      font-size: 0.8rem;
      letter-spacing: 1px;
      background-color: var(--light-yellow);
      color: var(--medium-yellow);
      border-radius: 4px;
      padding: 0.2rem 0.4rem;
    `}
    {...props}
  />
);

export default Tag;
