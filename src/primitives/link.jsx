import React from "react";
import { css } from "@emotion/core";
import { Link as GatsbyLink } from "gatsby";

const styles = css`
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(var(--dark-yellow), var(--dark-yellow));
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;

  svg {
    margin-left: 0.4rem;
    vertical-align: sub;
  }

  &:hover,
  &:focus,
  &.current-page {
    background-size: 0 3px, 100% 3px;
  }
`;

const Link = ({ href, children, ...props }) => {
  if (href) {
    return (
      <a
        href={href}
        css={styles}
        target="_blank"
        rel="noreferrer noopener nofollow"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink css={styles} {...props}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
