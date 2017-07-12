var path = require('path');
var Data = require(path.resolve(path.dirname(__dirname), 'modules/data'));
var _ = require('underscore');

module.exports = function(router) {
  router.route('/cards').post(function(req, res) {
    var card = {
      id: Data.getLastCardID() + 1,
      title: req.body.title,
      labels: [],
      archived: false
    };
    var listID = req.body.listID;
    var lists = Data.getLists();
    var list = _.findWhere(lists, { id: listID });
    console.log(card, listID, lists, list, req.body);

    list.cards.push(card);
    Data.setLists(lists, false);
    res.json(card);
  });
};