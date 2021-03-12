import React from "react";
import { css } from "@emotion/core";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Button, Heading, Tag } from "../primitives";

const ProjectPreview = ({ project }) => (
  <article
    css={css`
      display: flex;

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }
    `}
  >
    <GatsbyImage
      image={project.image?.sharp?.gatsbyImageData}
      css={css`
        border-radius: 0.5rem;
        width: 330px;
        height: 250px;
        flex-shrink: 0;
      `}
      alt={project.title}
    />
    <div
      css={css`
        flex-grow: 1;
        margin-left: 2rem;
      `}
    >
      {project.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <Heading
        Level="h2"
        disableOverline
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <Link to={project.slug} href={project.external_url}>
          {project.title}
        </Link>
      </Heading>

      <p>{project.excerpt}</p>

      <Button
        to={project.slug}
        css={css`
          margin-right: 1rem;
        `}
      >
        View details
      </Button>
      <Link href={project.url}>
        Visit
        <svg width="20" height="20">
          <use xlinkHref="/symbol-defs.svg#external-link"></use>
        </svg>
      </Link>
    </div>
  </article>
);

export default ProjectPreview;
