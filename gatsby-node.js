const path = require(`path`)

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
};

exports.createPages = ({ graphql, actions: { createPage } }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  return graphql(`
  query AllParkruns {
    allInternalParkruns {
      edges{
        node{
          id
          name
          uri
        }
      }
    }
  }
  `
  ).then(result => {
    result.data.allInternalParkruns.edges.forEach(({ node }) => {

      if (!node.uri)
        return;
      const split = node.uri.split('.');
      const parkrunPath = split[split.length - 1];
      const pagePath = `parkruns/${parkrunPath}`;
      createPage({
        path: pagePath,
        component: path.resolve(`./src/templates/parkrun-details.js`),
        context: {
          id: node.id
        },
      })
    })
  })
};