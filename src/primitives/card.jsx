import React from "react";
import { css } from "@emotion/core";
import BackgroundImage from "gatsby-background-image";
import { Heading, Button, Tag } from "../primitives";

const Card = ({ order, project }) => (
  <article
    css={css`
      position: sticky;
      top: ${order * 30}px;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 3px 25px rgba(0, 0, 0, 0.05);
      margin-top: 3rem;
      height: 500px;
    `}
  >
    {project.image && (
      <BackgroundImage
        Tag="div"
        fluid={project.image.sharp.fluid}
        fadeIn
        css={css`
          padding: 3rem 2.5rem;
          height: 100%;
          background-size: 60%;
          background-position: bottom -80px right -30px;
          background-repeat: no-repeat;
        `}
      >
        <div
          css={css`
            max-width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            height: 100%;
          `}
        >
          <Heading Level="h3">{project.title}</Heading>
          <span>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </span>
          <p
            css={css`
              margin: 1rem 0 2rem 0;
            `}
          >
            {project.excerpt}
          </p>

          <Button
            href={project.url}
            aria-label={`Visit ${project.title} (external link)`}
          >
            Website
            <svg width="20" height="20">
              <use xlinkHref="/symbol-defs.svg#external-link"></use>
            </svg>
          </Button>
        </div>
      </BackgroundImage>
    )}
  </article>
);

export default Card;
