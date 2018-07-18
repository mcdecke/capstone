const routes = require('next-routes')()

routes
  .add('/passwordBlocks/new', '/passwordBlocks/new')
  .add('/passwordBlocks/:address', '/passwordBlocks/show')

module.exports = routes
