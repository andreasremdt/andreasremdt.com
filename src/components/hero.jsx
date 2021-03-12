import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Heading, Button } from "../primitives";
import { SocialIcons } from "../components";
import { main, container, text, button, portrait } from "./hero.module.css";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "portrait-andreas-remdt.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350, layout: FIXED)
        }
      }
    }
  `);

  return (
    <section className={main}>
      <Container className={container}>
        <Heading>Hey, I'm Andreas.</Heading>
        <p className={text}>
          I am a Web Developer based in Germany that loves to build fast,
          accessible, and good-looking web applications using cutting-edge
          technologies.
        </p>
        <Button className={button} to="/contact/">
          Get in touch
        </Button>
        <SocialIcons />
        <GatsbyImage
          image={image.sharp.gatsbyImageData}
          alt="Portrait of Andreas Remdt"
          className={portrait}
          imgStyle={{
            borderRadius: "0.5rem"
          }}
          style={{
            position: "absolute",
            top: "3rem",
            right: "0",
            zIndex: 1,
            overflow: "visible"
          }}
        />
      </Container>
    </section>
  );
};

export default Hero;
