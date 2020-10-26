import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { Layout } from "../components";
import { PageHeader, Container, Button, Link, MDXWrapper } from "../primitives";

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
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
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
    <Container
      css={css`
        display: flex;
      `}
    >
      <aside
        css={css`
          flex-grow: 1;
        `}
      >
        <Image
          fluid={project.frontmatter.image?.sharp?.fluid}
          css={css`
            border-radius: 0.5rem;
          `}
          alt={project.title}
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
        <Button
          to="/projects/"
          css={css`
            margin-right: 1rem;
          `}
        >
          Back to projects
        </Button>
        <Link href={project.frontmatter.url}>
          Visit
          <svg width="20" height="20">
            <use xlinkHref="/symbol-defs.svg#external-link"></use>
          </svg>
        </Link>
      </aside>
      <div
        css={css`
          flex: 0 0 55%;
          margin-left: 2rem;
        `}
      >
        <MDXWrapper>{project.body}</MDXWrapper>
      </div>
    </Container>
  </Layout>
);

export default PostTemplate;
