import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Layout } from "../components";
import { PageHeader, Container, Button, Link, MDXWrapper } from "../primitives";
import { main, sidebar, button, content, image } from "./project.module.css";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        excerpt
        url
        technologies
        date(formatString: "YYYY")
        image {
          sharp: childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: project } }) => (
  <Layout pageTitle={project.frontmatter.title}>
    <PageHeader
      title={project.frontmatter.title}
      subtitle={project.frontmatter.excerpt}
    />
    <Container className={main}>
      <aside className={sidebar}>
        <GatsbyImage
          image={project.frontmatter.image?.sharp?.gatsbyImageData}
          className={image}
          alt={project.frontmatter.title}
        />
        <ul>
          <li>
            <strong>Published in:</strong> {project.frontmatter.date}
          </li>
          <li>
            <strong>Technologies:</strong>{" "}
            {project.frontmatter.technologies.join(", ")}
          </li>
        </ul>
        <Button to="/projects/" className={button}>
          Back to projects
        </Button>
        <Link href={project.frontmatter.url}>
          Visit
          <svg width="20" height="20">
            <use xlinkHref="/symbol-defs.svg#external-link"></use>
          </svg>
        </Link>
      </aside>
      <div className={content}>
        <MDXWrapper>{project.body}</MDXWrapper>
      </div>
    </Container>
  </Layout>
);

export default PostTemplate;
