const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsDidattica {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsDidattica.edges.map(({ node: didattica }) => {
        createPage({
          path: `test/`,
          component: path.resolve(`./src/components//Main/index.js`),
          context: {
            slug: 'test/',
          },
        })
      })
      resolve()
    })
  })
}
