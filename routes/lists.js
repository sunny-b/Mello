var path = require('path');
var Board = require(path.resolve(path.dirname(__dirname), 'modules/board'));
var _ = require('underscore');

module.exports = function(router) {
  router.route('/board/lists').post(function(req, res) {
    var board = Board.get();
    var newID = Board.lastListID() + 1;
    var list = req.body;

    list.cards = [];
    list.id = newID;
    board.lists.push(list);
    board.lastListID = newID;

    Board.save(board);
    res.json(list);
  }).put(function(req, res) {
    var board = Board.get();
    board.lists = req.body;

    Board.save(board);
    res.status(200).end();
  });

  router.route('/board/:id').put(function(req, res) {
    var board = Board.get();
    var oldList = _(board.lists).findWhere({ id: +req.params.id });

    _.extend(oldList, req.body);
    Board.save(board);
    res.status(200).end();
  }).delete(function(req, res) {
    var board = Board.get();
    board.lists = _(board.lists).reject(function(list) {
      return list.id === +req.params.id;
    });

    Board.save(board);
    res.status(200).end();
  });

  router.post('/lists/:action', function(req, res) {
    var lists = Board.getLists();
    var newID = Board.getLastListID() + 1;
    var list = JSON.parse(req.body.list);
    var oldIndex = _.findIndex(lists, { id: list.id });

    function copyList(req, res) {
      var copiedList = JSON.parse(req.body.copiedList);

      copiedList.title = req.body.newName;
      copiedList.id = newID;
      
      lists.splice(oldIndex + 1, 0, copiedList);
      Board.set(lists, true);
    }

    function moveList(req, res) {
      var newIndex = req.body.newIndex;
      lists.splice(oldIndex, 1);
      lists.splice(newIndex, 0, list);
      Board.set(lists);
    }

    if (req.params.action === 'copy') {
      copyList(req, res);
    } else if (req.params.action === 'move') {
      moveList(req, res);
    }

    res.json(lists);
  });
};