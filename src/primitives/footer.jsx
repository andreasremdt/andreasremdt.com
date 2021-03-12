import React from "react";
import { Container } from "../primitives";
import { SocialIcons } from "../components";
import { main, container } from "./footer.module.css";

const Footer = () => (
  <footer className={main}>
    <Container className={container}>
      <p>Powered by Gatsby.</p>
      <SocialIcons />
    </Container>
  </footer>
);

export default Footer;
