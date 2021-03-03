module.exports = {
  siteMetadata: {
    title: "I'm using VS Code now...",
    description: "I won't show this to my co-workers"
  },
  plugins: [
        `gatsby-plugin-image`,
	      `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `posts`,
            path: `${__dirname}/blog/`,
          },
        },
  ],
};
