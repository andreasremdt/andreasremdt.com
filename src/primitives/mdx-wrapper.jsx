import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "../primitives";

const MDXWrapper = ({ children }) => (
  <MDXProvider
    components={{
      a: Link
    }}
  >
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);

export default MDXWrapper;
