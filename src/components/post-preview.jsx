import React from "react";
import { css } from "@emotion/core";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, Button, Heading, Tag } from "../primitives";
import getLabelFromUrl from "../utils/get-label-from-url";

const PostPreview = ({ post }) => (
  <article
    css={css`
      display: flex;

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }
    `}
  >
    <GatsbyImage
      image={post.image?.sharp?.gatsbyImageData}
      css={css`
        border-radius: 0.5rem;
        width: 400px;
        height: 250px;
        flex-shrink: 0;
      `}
      alt={post.title}
    />
    <div
      css={css`
        flex-grow: 1;
        margin-left: 2rem;
      `}
    >
      {console.log(post.slug)}
      {post.date && <Tag>{post.date}</Tag>}
      <Heading
        Level="h2"
        disableOverline
        css={css`
          margin-top: 0.5rem;
        `}
      >
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
