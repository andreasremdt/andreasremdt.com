import React from "react";
import { main, h1, h2, h3, overline } from "./heading.module.css";

const mapping = { h1, h2, h3 };

const Heading = ({
  Level = "h1",
  disableOverline = false,
  className,
  ...props
}) => (
  <Level
    className={[
      main,
      mapping[Level],
      disableOverline ? "" : overline,
      className
    ].join(" ")}
    {...props}
  />
);

export default Heading;
