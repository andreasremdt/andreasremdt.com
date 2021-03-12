import React from "react";
import { Container } from "../primitives";
import { main, container, heading, subheading } from "./page-header.module.css";

const PageHeader = ({ title, subtitle }) => (
  <header className={main}>
    <Container className={container}>
      <h1 className={heading}>{title}</h1>
      {subtitle && <p className={subheading}>{subtitle}</p>}
    </Container>
  </header>
);

export default PageHeader;
