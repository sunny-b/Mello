var App = {
  templates: JST,
  $header: $('header'),
  $main: $('main'),
  renderPage: function() {
    this.headerView = new HeaderView();
    this.boardView = new BoardView({
      lists: this.lists,
      cards: this.cards,
      title: 'You Board'
    });
  },
  addList: function($f) {
    var self = this;
    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        self.lists.add(json);
        self.renderPage();
      }
    });
  },
  addCard: function($f, listID, cardName) {
    var self = this;
    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        title: cardName,
        listID: listID
      },
      success: function(json) {
        self.renderPage();
      }
    });
  },
  binds: function() {
    _.extend(this, Backbone.Events);
    this.on('addList', this.addList.bind(this));
    this.on('addCard', this.addCard.bind(this));
  },
  init: function() {
    this.binds();
    this.renderPage();
  }
};