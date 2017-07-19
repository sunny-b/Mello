var BoardModel = Backbone.Model.extend({
  url: '/board',
  parse: function(board) {
    this.lists.reset(board.lists);
  },
  listByID: function(id) {
    return this.lists.get(id);
  },
  nextCardID: function() {
    debugger;
    return this.get('lastCardID') + 1;
  },
  incrementCardID: function() {
    debugger;
    this.set('lastCardID', this.get('lastCardID') + 1);
    this.sync('update', this);
  },
  initialize: function(board) {
    this.lists = new ListsCollection();
    this.lists.reset(board.lists);
    this.lastCardID = board.lastCardID;
  }
});