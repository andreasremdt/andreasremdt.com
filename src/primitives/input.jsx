import React from "react";
import * as styles from "./input.module.css";

const Input = ({ error, onChange, type, multiline, className, ...props }) => (
  <div className={styles.group}>
    <label className={styles.label} htmlFor={props.id}>
      {props.label}
      {props.required && <span className={styles.asterisk}>*</span>}
    </label>
    {multiline ? (
      <textarea
        name={props.id}
        id={props.id}
        onChange={onChange}
        className={[
          styles.main,
          error ? styles.invalid : "",
          styles.textarea,
          className
        ].join(" ")}
        {...props}
      />
    ) : (
      <input
        name={props.id}
        id={props.id}
        type={type}
        onChange={onChange}
        className={[styles.main, error ? styles.invalid : "", className].join(
          " "
        )}
        {...props}
      />
    )}
    {Boolean(error) && <p className={styles.error}>{error}</p>}
  </div>
);

Input.defaultProps = {
  type: "text",
  multiline: false,
  onChange: () => {}
};

export default Input;
