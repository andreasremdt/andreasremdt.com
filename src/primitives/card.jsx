import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Heading, Button, Tag } from "../primitives";
import { wrapper, image, text } from "./card.module.css";

const Card = ({ order, project }) => (
  <article style={{ top: order * 30 }} className={wrapper}>
    <GatsbyImage
      image={project.image?.childImageSharp?.gatsbyImageData}
      className={image}
      alt={project.title}
    />
    <Heading Level="h3">{project.title}</Heading>

    <div>
      {project.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>

    <p className={text}>{project.excerpt}</p>

    <Button
      href={project.url}
      aria-label={`Visit ${project.title} (external link)`}
    >
      Website
      <svg width="20" height="20">
        <use xlinkHref="/symbol-defs.svg#external-link"></use>
      </svg>
    </Button>
  </article>
);

export default Card;
