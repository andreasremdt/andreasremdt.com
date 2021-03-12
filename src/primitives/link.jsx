import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { main } from "./link.module.css";

const Link = ({ href, children, className, ...props }) => {
  if (href) {
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
    <GatsbyLink className={[main, className].join(" ")} {...props}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
