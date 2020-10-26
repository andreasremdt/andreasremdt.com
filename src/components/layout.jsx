import React from "react";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import { Header, Footer } from "../primitives";
import useSiteMetadata from "../hooks/use-sitemetadata";

const Layout = ({ children, pageTitle = "Home" }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          :root {
            --dark-yellow: hsl(39, 93%, 61%);
            --medium-yellow: hsl(36, 31%, 35%);
            --medium-light-yellow: hsl(36, 60%, 86%);
            --light-yellow: hsl(45, 67%, 96%);
            --dark-gray: hsl(209, 51%, 11%);
            --medium-gray: hsl(232, 13%, 45%);
            --light-gray: hsl(0, 0%, 67%);
            --medium-red: hsl(9, 100%, 64%);
          }

          ::selection {
            color: var(--dark-gray);
            background-color: var(--dark-yellow);
          }

          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: unset;
            color: var(--medium-gray);
            font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: Merriweather, -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto;
            color: var(--dark-gray);
            line-height: 1.1;
          }

          img {
            max-width: 100%;
          }

          a {
            text-decoration: none;
            color: var(--dark-gray);
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }

          .gatsby-highlight pre[class*="language-"].line-numbers {
            padding-left: 2.8em;
          }

          .gatsby-highlight {
            background-color: var(--light-yellow);
            border-radius: 0.3em;
            margin: 0.5em 0;
            padding: 1em;
            overflow: auto;
          }

          .gatsby-highlight pre[class*="language-"].line-numbers {
            padding: 0;
            padding-left: 2.8em;
            overflow: initial;
          }

          .gatsby-highlight pre[class*="language-"] {
            background-color: var(--light-yellow);
          }

          code[class*="language-"],
          pre[class*="language-"] {
            font-family: "Source Code Pro";
            font-size: 15px;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>
          {pageTitle} - {title}
        </title>
        <meta name="description" content={description} />
        <meta name="author" content="Andreas Remdt" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
