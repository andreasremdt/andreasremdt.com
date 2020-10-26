import React from "react";
import { css } from "@emotion/core";

const Input = ({ error, onChange, type, multiline, ...props }) => {
  const styles = css`
    height: ${multiline ? "100px" : "46px"};
    padding: 0.5rem;
    width: 100%;
    border-radius: 0.3rem;
    border: 1px solid ${error ? "var(--medium-red)" : "var(--light-gray)"};
    font-family: inherit;
    font-size: 14px;
    color: var(--medium-gray);
    outline: none;
    resize: none;
    transition: border-color 0.1s linear;
    ${error ? "box-shadow: 0 0 10px hsla(9,100%,64%, 0.15);" : ""}

    &:hover,
    &:focus {
      border-color: ${error ? "var(--medium-red)" : "var(--medium-gray)"};
    }
  `;

  return (
    <div
      css={css`
        margin-bottom: 1rem;
        position: relative;
      `}
    >
      <label
        css={css`
          color: var(--dark-gray);
          margin-bottom: 0.3rem;
          display: block;
        `}
        htmlFor={props.id}
      >
        {props.label}
        {props.required && (
          <span
            css={css`
              color: var(--medium-red);
              margin-left: 0.3rem;
            `}
          >
            *
          </span>
        )}
      </label>
      {multiline ? (
        <textarea
          name={props.id}
          id={props.id}
          onChange={onChange}
          css={styles}
          error={error}
          {...props}
        />
      ) : (
        <input
          name={props.id}
          id={props.id}
          type={type}
          onChange={onChange}
          css={styles}
          error={error}
          {...props}
        />
      )}
      {Boolean(error) && (
        <p
          css={css`
            margin: unset;
            color: var(--medium-red);
            font-size: 13px;
            display: inline-block;
            position: absolute;
            bottom: 0;
            right: 0.3rem;
            padding: 0 0.3rem;
          `}
        >
          {error}
        </p>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  multiline: false,
  onChange: () => {}
};

export default Input;
