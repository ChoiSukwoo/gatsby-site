const path = require('path');
const { Context } = require('react-responsive');

module.exports = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const posts = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                name
                slug
                title
              }
              html
            }
          }
        }
      }      
      `)
    const { edges } = posts.data.allMarkdownRemark;

    console.log(edges);

    edges.forEach(elemtent => {
        const { slug, name, title } = elemtent.node.frontmatter
        console.log(title);

        createPage({
            path: slug,
            component: path.resolve('./src/templates/blogs-templates.js'),
            context: {
                html: elemtent.node.html,
                title : title
            }
        })


    })

}