var path = require('path');
var Data = require(path.resolve(path.dirname(__dirname), 'modules/data'));
var _ = require('underscore');

module.exports = function(router) {
  router.route('/cards').post(function(req, res) {
    var listID = +req.body.listID;
    var lists = Data.getLists();
    var list = _.findWhere(lists, { id: listID });
    var card = {
      id: Data.getLastCardID() + 1,
      listID: listID,
      title: req.body.title,
      labels: []
    };
    
    list.cards.push(card);
    Data.set(lists);
    Data.incrementCardID();
    res.json(card);
  }).put(function(req, res) {
    var lists = Data.getLists();
    var card = JSON.parse(req.body.card);
    var cards = _(lists).findWhere({ id: card.listID }).cards;
    var currentCard = _(cards).findWhere({ id: card.id });
    
    _.extend(currentCard, card);
    Data.set(lists);
    res.status(200).end();
  }).delete(function(req, res) {
    var lists = Data.getLists();
    var list = _(lists).findWhere({ id: +req.body.listID });
    
    list.cards = _(list.cards).reject(function(card) {
      return card.id === +req.body.cardID;
    });

    Data.set(lists);
    res.json(lists);
  });

  router.post('/cards/:action', function(req, res) {
    var lists = Data.getLists();
    var card = JSON.parse(req.body.card);
    var newListID = +req.body.listID;
    var newCardIndex = +req.body.newCardIndex;
    var newList = _(lists).findWhere({ id: newListID });

    function copyCard(req, res) {
      var newID = Data.getLastCardID() + 1;
      console.log(req.body.newName);
      card.title = req.body.newName;
      card.id = newID;
      card.listID = newListID;
      
      newList.cards.splice(newCardIndex, 0, card);
      Data.incrementCardID();
    }

    function moveCard(req, res) {
      var oldList = _(lists).findWhere({ id: card.listID });
      var oldCardIndex = _.findIndex(oldList.cards, { id: card.id });
      
      oldList.cards.splice(oldCardIndex, 1);
      newList.cards.splice(newCardIndex, 0, card);
      card.listID = newList.id;
    }

    if (req.params.action === 'copy') {
      copyCard(req, res);
    } else if (req.params.action === 'move') {
      moveCard(req, res);
    }

    Data.set(lists);
    res.json(lists);
  });
};