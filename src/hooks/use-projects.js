import { graphql, useStaticQuery } from "gatsby";

const useProjects = (limit = 20) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: childMdx___frontmatter___date, order: DESC }
        filter: {
          extension: { eq: "mdx" }
          sourceInstanceName: { eq: "projects" }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              tags
              slug
              url
              image {
                sharp: childImageSharp {
                  fluid(quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  return data.allFile.nodes
    .map((project) => ({
      title: project.childMdx.frontmatter.title,
      slug: `/projects/${project.childMdx.frontmatter.slug}/`,
      image: project.childMdx.frontmatter.image,
      url: project.childMdx.frontmatter.url,
      tags: project.childMdx.frontmatter.tags,
      excerpt: project.childMdx.excerpt
    }))
    .slice(0, limit);
};

export default useProjects;
