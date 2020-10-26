exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            template
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create pages", result.errors);
  }

  result.data.allMdx.nodes.forEach((page) => {
    const { template, slug } = page.frontmatter;
    const path = template === "post" ? "blog" : "projects";

    if (slug) {
      actions.createPage({
        path: `${path}/${slug}`,
        component: require.resolve(`./src/templates/${template}.jsx`),
        context: {
          slug: slug
        }
      });
    }
  });
};
