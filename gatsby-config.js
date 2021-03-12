module.exports = {
  siteMetadata: {
    title: "Andreas Remdt",
    description:
      "Fast, secure and good looking websites? Yes please! That's what I do. This is the personal website of Andreas Remdt, Web Developer."
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.jsx")
        },
        gatsbyRemarkPlugins: ["gatsby-remark-images", "gatsby-remark-prismjs"],
        plugins: ["gatsby-remark-images", "gatsby-remark-prismjs"]
      }
    },
    {
      resolve: "gatsby-remark-prismjs",
      options: {
        showLineNumbers: true
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "projects"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images"
      }
    }
  ]
};
