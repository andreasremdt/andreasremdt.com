import React from "react";
import { main } from "./tag.module.css";

const Tag = ({ className, ...props }) => (
  <span className={[main, className].join(" ")} {...props} />
);

export default Tag;
