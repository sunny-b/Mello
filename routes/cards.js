var path = require('path');
var Board = require(path.resolve(path.dirname(__dirname), 'modules/board'));
var _ = require('underscore');

module.exports = function(router) {
  router.route('/board/:listID/cards').post(function(req, res) {
    var board = Board.get();
    var listID = +req.params.listID;
    var list = _(board.lists).findWhere({ id: +req.params.listID });
    var newCardID = Board.nextCardID();

    var card = {
      id: newCardID,
      listID: listID,
      title: req.body.title,
      labels: []
    };
    
    list.cards.push(card);
    board.lastCardID = newCardID;
    Board.save(board);
    res.json(card);
  }).put(function(req, res) {
    var board = Board.get();
    var list = _(board.lists).findWhere({ id: +req.params.listID });

    list.cards = req.body;
    Board.save(board);
    res.status(200).end();
  });

  router.route('/board/:listID/cards/:cardID').put(function(req, res) {
    var board = Board.get();
    var newCard = req.body;
    var cards = _(board.lists).findWhere({ id: +req.params.listID }).cards;
    var oldCard = _(cards).findWhere({ id: +req.params.cardID });
    
    _.extend(oldCard, newCard);
    console.log(oldCard);
    Board.save(board);
    res.status(200).end();
  }).delete(function(req, res) {
    var board = Board.get();
    var list = _(board.lists).findWhere({ id: +req.params.listID });
    
    list.cards = _(list.cards).reject(function(card) {
      return card.id === +req.params.cardID;
    });

    Board.save(board);
    res.status(200).end();
  });
};