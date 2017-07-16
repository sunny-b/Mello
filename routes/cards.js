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
      labels: [],
      archived: false
    };
    
    list.cards.push(card);
    Data.set(lists, false);
    res.json(card);
  }).put(function(req, res) {
    var lists = Data.getLists();
    var card = JSON.parse(req.body.card);
    var cards = _(lists).findWhere({ id: card.listID }).cards;
    var currentCard = _(cards).findWhere({ id: card.id });
    
    _.extend(currentCard, card);
    Data.set(lists, false);
    res.status(200).end();
  });
};