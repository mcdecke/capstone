const routes = require('next-routes')()

routes
  .add('/passwordBlocks/new', '/passwordBlocks/new')
  .add('/passwordBlocks/:address', '/passwordBlocks/show')
  //edit a password block
  .add('/passwordBlocks/:address/:id/edit', 'passwordBlocks/Edit/index')
  //nothing of use here
  .add('/passwordBlocks/:address/edit/new', '/passwordBlocks/Edit/new')
  //new password block
  .add('/passwordBlocks/:address/new', '/passwordBlocks/new')


module.exports = routes
