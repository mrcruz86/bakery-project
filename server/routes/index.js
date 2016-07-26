module.exports = function(router) {
  router = require('./bakery')(router);
  return router;
}
