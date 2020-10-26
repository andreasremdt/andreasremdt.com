import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { Layout } from "../components";
import { Heading, Container, Button } from "../primitives";

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
        css={css`
          padding: 18rem 0 0;
          text-align: center;
          background-image: url(${image.publicURL});
          background-repeat: no-repeat;
          background-position: center top;
          background-size: 500px;
        `}
      >
        <Heading disableOverline>Yikes...</Heading>
        <p>Sorry, but you are trying to open a page that's not there.</p>
        <Button to="/">Go back home?</Button>
      </Container>
    </Layout>
  );
};

export default NotFound;
