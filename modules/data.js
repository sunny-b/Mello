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
    return this.__readFile().lists;
  },
  getLastListID: function() {
    return this.get().lastListID;
  },
  setLists: function(data) {
    var allData = this.get();
    allData.lastListID = this.getLastListID() + 1;
    allData.lists = data;
    
    fs.writeFileSync(file_path, JSON.stringify(allData), 'utf8');
  }
};