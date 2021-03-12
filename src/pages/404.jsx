import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout } from "../components";
import { Heading, Container, Button } from "../primitives";
import { main } from "./404.module.css";

const NotFound = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "404.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <Layout pageTitle="404">
      <Container
        className={main}
        style={{ backgroundImage: `url(${image.publicURL})` }}
      >
        <Heading disableOverline>Yikes...</Heading>
        <p>Sorry, but you are trying to open a page that's not there.</p>
        <Button to="/">Go back home?</Button>
      </Container>
    </Layout>
  );
};

export default NotFound;
