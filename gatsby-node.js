const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsProdotti {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsProdotti.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/components/Prodotti/index.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}
