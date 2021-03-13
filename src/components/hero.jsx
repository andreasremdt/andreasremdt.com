import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Heading, Button } from "../primitives";
import { SocialIcons } from "../components";
import * as styles from "./hero.module.css";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "portrait-andreas-remdt.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
    }
  `);

  return (
    <section className={styles.main}>
      <Container className={styles.container}>
        <Heading>Hey, I'm Andreas.</Heading>
        <p className={styles.text}>
          I am a Web Developer based in Germany that loves to build fast,
          accessible, and good-looking web applications using cutting-edge
          technologies.
        </p>
        <Button className={styles.button} to="/contact/">
          Get in touch
        </Button>
        <SocialIcons />
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          layout="constrained"
          alt="Portrait of Andreas Remdt"
          className={styles.portrait}
          imgClassName={styles.image}
        />
      </Container>
    </section>
  );
};

export default Hero;
