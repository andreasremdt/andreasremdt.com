import React from "react";
import { Layout, ProjectPreview } from "../components";
import { PageHeader, Container } from "../primitives";
import useProjects from "../hooks/use-projects";

const BlogPage = () => {
  const projects = useProjects();

  return (
    <Layout pageTitle="Projects">
      <PageHeader
        title="Projects"
        subtitle="Libraries, apps, and websites I have built over time."
      />
      <Container>
        {projects.map((project) => (
          <ProjectPreview key={project.slug} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export default BlogPage;
