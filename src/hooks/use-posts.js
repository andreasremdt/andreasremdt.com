import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { template: { eq: "post" } } }
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            external_url
            image {
              sharp: childImageSharp {
                gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    external_url: post.frontmatter.external_url,
    image: post.frontmatter.image,
    excerpt: post.excerpt
  }));
};

export default usePosts;
