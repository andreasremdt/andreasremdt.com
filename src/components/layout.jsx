import React from "react";
import Helmet from "react-helmet";
import { Header, Footer } from "../primitives";
import useSiteMetadata from "../hooks/use-sitemetadata";
import "./layout.css";

const Layout = ({ children, pageTitle = "Home" }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          {pageTitle} - {title}
        </title>
        <meta name="description" content={description} />
        <meta name="author" content="Andreas Remdt" />
        <meta name="theme-color" content="#f8b73f" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
