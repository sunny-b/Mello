var fs = require('fs');
var path = require('path');
var file_path = path.resolve(path.dirname(__dirname), 'data/all.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },
  get: function() {
    return this.__readFile();
  },
  getLists: function() {
    return this.get().lists;
  },
  getCards: function() {
    return this.get().cards;
  },
  getLastListID: function() {
    return this.get().lastListID;
  },
  getLastCardID: function() {
    return this.get().lastCardID;
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
  save: function(allData) {
    fs.writeFileSync(file_path, JSON.stringify(allData), 'utf8');
  }
};