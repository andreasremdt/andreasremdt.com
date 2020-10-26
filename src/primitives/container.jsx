import React from "react";
import { css } from "@emotion/core";

const Container = (props) => (
  <div
    css={css`
      max-width: 1170px;
      width: 100%;
      margin: auto;
      padding: 0 1rem;
    `}
    {...props}
  />
);

export default Container;
