var path = require('path');
var Data = require(path.resolve(path.dirname(__dirname), 'modules/data'));
var _ = require('underscore');

module.exports = function(router) {
  router.route('/lists').post(function(req, res) {
    var lists = Data.getLists();
    var newID = Data.getLastListID() + 1;
    var list;

    list = req.body;
    list.cards = [];
    list.id = newID;
    lists.push(list);

    Data.set(lists, true);
    res.json(list);
  }).put(function(req, res) {
    var lists = Data.getLists();
    var list = JSON.parse(req.body.list);
    var currentList = _(lists).findWhere({ id: list.id });

    _.extend(currentList, list);
    
    Data.set(lists);
    res.status(200).end();
  }).delete(function(req, res) {
    var lists = _(Data.getLists()).reject(function(list) {
      return list.id === +req.body.listID;
    });

    Data.set(lists);

    res.status(200).end();
  });

  router.post('/lists/:action', function(req, res) {
    var lists = Data.getLists();
    var newID = Data.getLastListID() + 1;
    var list = JSON.parse(req.body.list);
    var oldIndex = _.findIndex(lists, { id: list.id });

    function copyList(req, res) {
      var copiedList = JSON.parse(req.body.copiedList);

      copiedList.title = req.body.newName;
      copiedList.id = newID;
      
      lists.splice(oldIndex + 1, 0, copiedList);
      Data.set(lists, true);
    }

    function moveList(req, res) {
      var newIndex = req.body.newIndex;
      lists.splice(oldIndex, 1);
      lists.splice(newIndex, 0, list);
      Data.set(lists);
    }

    if (req.params.action === 'copy') {
      copyList(req, res);
    } else if (req.params.action === 'move') {
      moveList(req, res);
    }

    res.json(lists);
  });
};