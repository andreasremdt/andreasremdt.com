import React from "react";
import { Link } from "gatsby";
import { main } from "./button.module.css";

const Button = ({ type, href, children, className, ...props }) => {
  if (type === "button" || type === "submit") {
    return (
      <button className={[main, className].join(" ")} type={type} {...props}>
        {children}
      </button>
    );
  } else if (href) {
    return (
      <a
        href={href}
        className={[main, className].join(" ")}
        target="_blank"
        rel="noreferrer noopener nofollow"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={[main, className].join(" ")} {...props}>
      {children}
    </Link>
  );
};

export default Button;
