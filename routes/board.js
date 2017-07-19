var path = require("path");
var _ = require("underscore");
var Board = require(path.resolve(path.dirname(__dirname), 'modules/board'));

module.exports = function(router) {
  router.route("/board").get(function(req, res) {
    res.json(Board.get());
  }).put(function(req, res) {
    board = Board.get();
    board.lastCardID = +req.body.lastCardID;
    board.lastListID = +req.body.lastListID;

    Board.save(board);
    res.status(200).end();
  });
};