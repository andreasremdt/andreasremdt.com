import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Button, Heading, Tag } from "../primitives";
import { main, body, image, title, button } from "./project-preview.module.css";

const ProjectPreview = ({ project }) => (
  <article className={main}>
    <GatsbyImage
      image={project.image?.childImageSharp?.gatsbyImageData}
      className={image}
      alt={project.title}
    />
    <div className={body}>
      {project.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <Heading Level="h2" disableOverline className={title}>
        <Link to={project.slug} href={project.external_url}>
          {project.title}
        </Link>
      </Heading>

      <p>{project.excerpt}</p>

      <Button to={project.slug} className={button}>
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
