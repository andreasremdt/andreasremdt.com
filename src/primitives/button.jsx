import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const styles = css`
  display: inline-flex;
  align-items: center;
  height: 46px;
  padding: 0 1.5rem;
  color: var(--dark-gray);
  font-size: 14px;
  border: none;
  font-family: inherit;
  border-radius: 0.3rem;
  cursor: pointer;
  background-image: linear-gradient(var(--dark-yellow), var(--dark-yellow)),
    linear-gradient(var(--dark-gray), var(--dark-gray));
  background-size: 100% 100%, 0 100%;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: color 0.2s linear, background-size 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    background: var(--light-gray);
    cursor: not-allowed;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    color: white;
    background-size: 0 100%, 100% 100%;
  }

  svg {
    margin-left: 0.4rem;
  }
`;

const Button = ({ type, href, children, ...props }) => {
  if (type === "button" || type === "submit") {
    return (
      <button css={styles} type={type} {...props}>
        {children}
      </button>
    );
  } else if (href) {
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
    <Link css={styles} {...props}>
      {children}
    </Link>
  );
};

export default Button;
