var path = require('path');
var Data = require(path.resolve(path.dirname(__dirname), 'modules/data'));
var _ = require('underscore');

module.exports = function(router) {
  router.route('/lists').post(function(req, res) {
    var list = req.body;
    var lists = Data.getLists();
    console.log('this works');

    list.id = Data.getLastListID() + 1;
    list.cards = [];
    lists.push(list);
    Data.setLists(lists, true);
    res.json(list);
  });
};