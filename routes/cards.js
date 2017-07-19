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

  router.route('/cards').put(function(req, res) {
    var lists = Board.getLists();
    var card = JSON.parse(req.body.card);
    var cards = _(lists).findWhere({ id: card.listID }).cards;
    var currentCard = _(cards).findWhere({ id: card.id });
    
    _.extend(currentCard, card);
    Board.set(lists);
    res.status(200).end();
  }).delete(function(req, res) {
    var lists = Board.getLists();
    var list = _(lists).findWhere({ id: +req.body.listID });
    
    list.cards = _(list.cards).reject(function(card) {
      return card.id === +req.body.cardID;
    });

    Board.set(lists);
    res.json(lists);
  });

  router.post('/cards/:action', function(req, res) {
    var lists = Board.getLists();
    var card = JSON.parse(req.body.card);
    var newListID = +req.body.listID;
    var newCardIndex = +req.body.newCardIndex;
    var newList = _(lists).findWhere({ id: newListID });

    function copyCard(req, res) {
      var newID = Board.getLastCardID() + 1;
      console.log(req.body.newName);
      card.title = req.body.newName;
      card.id = newID;
      card.listID = newListID;
      
      newList.cards.splice(newCardIndex, 0, card);
      Board.incrementCardID();
    }

    if (req.params.action === 'copy') {
      copyCard(req, res);
    } else if (req.params.action === 'move') {
      moveCard(req, res);
    }

    Board.set(lists);
    res.json(lists);
  });
};