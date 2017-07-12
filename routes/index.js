var path = require('path');
var Data = require(path.resolve(path.dirname(__dirname), 'modules/data'));

module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Trello',
      lists: Data.getLists()
    });
  });
};
