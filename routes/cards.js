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
    Data.setLists(lists, false);
    res.json(card);
  }).put(function(req, res) {
    var lists = Data.getLists();
    var currentCards = _(lists).findWhere({ id: +req.body.listID }).cards;
    var currentCard = _(currentCards).findWhere({ id: +req.body.id });
    
    console.log(currentCard, req.body);
    currentCard.title = req.body.cardName;
    Data.setLists(lists, false);
    res.status(200).end();
  });
};