import React from "react";
import { Layout, PostPreview } from "../components";
import { PageHeader, Container } from "../primitives";
import usePosts from "../hooks/use-posts";

const BlogPage = () => {
  const posts = usePosts();

  return (
    <Layout pageTitle="Blog">
      <PageHeader
        title="Blog"
        subtitle="Technical articles I published, covering web development topics."
      />
      <Container>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Container>
    </Layout>
  );
};

export default BlogPage;
