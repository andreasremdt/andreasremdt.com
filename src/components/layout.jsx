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
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
