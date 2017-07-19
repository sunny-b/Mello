var path = require('path');
var Board = require(path.resolve(path.dirname(__dirname), 'modules/board'));

module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Trello',
      board: Board.get()
    });
  });
};
