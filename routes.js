const routes = require('next-routes')()

routes.add('/tokens/:tokenId', '/token')

module.exports = routes
