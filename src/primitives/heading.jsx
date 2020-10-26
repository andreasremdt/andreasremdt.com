import React from "react";
import { css } from "@emotion/core";

const sizes = {
  h1: "50px",
  h2: "34px",
  h3: "26px"
};

const spacings = {
  h1: "0 0 0.5rem 0",
  h2: "0 0 2rem 0",
  h3: "0 0 .5rem 0"
};

const Heading = ({ Level = "h1", disableOverline = false, ...props }) => (
  <Level
    css={css`
      font-weight: 900;
      font-size: ${sizes[Level]};
      position: relative;
      margin: ${spacings[Level]};

      ${!disableOverline &&
      `
        max-width: max-content;

        &::before {
          content: "";
          position: absolute;
          top: -13px;
          left: 0;
          width: 40%;
          height: 3px;
          background-color: var(--dark-yellow);
        }
      `}
    `}
    {...props}
  />
);

export default Heading;
