import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Button, Heading, Tag } from "../primitives";
import getLabelFromUrl from "../utils/get-label-from-url";
import { main, body, title, image } from "./post-preview.module.css";

const PostPreview = ({ post }) => (
  <article className={main}>
    <GatsbyImage
      image={post.image?.childImageSharp?.gatsbyImageData}
      className={image}
      alt={post.title}
    />
    <div className={body}>
      {post.date && <Tag>{post.date}</Tag>}
      <Heading Level="h2" disableOverline className={title}>
        <Link to={post.slug} href={post.external_url}>
          {post.title}
        </Link>
      </Heading>

      <p>{post.excerpt}</p>

      <Button to={post.slug} href={post.external_url}>
        {getLabelFromUrl(post.external_url)}
        {post.external_url && (
          <svg width="20" height="20">
            <use xlinkHref="/symbol-defs.svg#external-link"></use>
          </svg>
        )}
      </Button>
    </div>
  </article>
);

export default PostPreview;
