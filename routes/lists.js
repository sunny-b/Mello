var path = require('path');
var Data = require(path.resolve(path.dirname(__dirname), 'modules/data'));
var _ = require('underscore');

module.exports = function(router) {
  router.route('/lists').post(function(req, res) {
    var list = req.body;
    var lists = Data.getLists();

    list.id = Data.getLastListID() + 1;
    lists.push(list);
    Data.setLists(lists);
    res.json(list);
  });
};