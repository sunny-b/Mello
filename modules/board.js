var fs = require('fs');
var path = require('path');
var file_path = path.resolve(path.dirname(__dirname), 'data/board.json');
var _ = require("underscore");

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },
  get: function() {
    return this.__readFile();
  },
  lists: function() {
    return this.get().lists;
  },
  listByID: function(id) {
    var lists = this.lists();

    return _.where(lists, { id: id });
  },
  lastListID: function() {
    return this.get().lastListID;
  },
  lastCardID: function() {
    return this.get().lastCardID;
  },
  nextCardID: function() {
    return this.lastCardID() + 1;
  },
  nextListID: function() {
    return this.lastListID() + 1;
  },
  incrementCardID: function() {
    var allData = this.get();

    allData.lastCardID = this.getLastCardID() + 1;
    this.save(allData);
  },
  set: function(lists, isNew) {
    var allData = this.get();

    if (isNew) {
      allData.lastListID = this.getLastListID() + 1;
    }

    allData.lists = lists;
    this.save(allData);
  },
  save: function(board) {
    fs.writeFileSync(file_path, JSON.stringify(board), 'utf8');
  }
};