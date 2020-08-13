const path = require('path')


module.exports.onCreateNode =({node, actions}) =>{
   const {createNodeFIeld} = actions

   if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
       console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', slug)
   }

}