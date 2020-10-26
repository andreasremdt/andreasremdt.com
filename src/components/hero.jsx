import React from "react";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { Container, Heading, Button } from "../primitives";
import { SocialIcons } from "../components";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "portrait-andreas-remdt.jpg" }) {
        sharp: childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <section
      css={css`
        max-width: 1720px;
        margin: 0 auto;
        background-color: var(--light-yellow);
        border-radius: 1rem;
      `}
    >
      <Container
        css={css`
          position: relative;
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          justify-content: center;
          height: 500px;
        `}
      >
        <Heading>Hey, I'm Andreas.</Heading>
        <p
          css={css`
            max-width: 50%;
            font-size: 18px;
          `}
        >
          I am a Web Developer based in Germany that loves to build fast,
          accessible, and good-looking web applications using cutting-edge
          technologies.
        </p>
        <Button
          css={css`
            margin-bottom: 3rem;
          `}
          to="/contact/"
        >
          Get in touch
        </Button>
        <SocialIcons />
        <Image
          fixed={image.sharp.fixed}
          alt="Portrait of Andreas Remdt"
          css={css`
            &::after {
              position: absolute;
              width: 70%;
              height: 100%;
              right: -20px;
              top: 20px;
              border-radius: 0.5rem;
              border: 3px solid var(--dark-yellow);
              content: "";
              z-index: -1;
            }
          `}
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
