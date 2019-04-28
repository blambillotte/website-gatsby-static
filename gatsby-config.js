
module.exports = {
  siteMetadata: {
    title: 'Ben Lambillote Personal Site',
    author: 'Ben Lambillotte'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["/src/styles/styles.scss"]
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    }
  ]
};