const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
    createPage({
      path: `/`,
      component: path.resolve(`./src/app.js`)
    }); 
}