import React from "react";
import { main } from "./container.module.css";

const Container = ({ className, ...props }) => (
  <div className={[main, className].join(" ")} {...props} />
);

export default Container;
