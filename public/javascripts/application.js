var App = {
  templates: JST,
  $header: $('header'),
  $main: $('main'),
  renderPage: function() {
    this.headerView = new HeaderView();
    this.boardView = new BoardView({
      collection: this.lists,
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
  binds: function() {
    _.extend(this, Backbone.Events);
    this.on('addList', this.addList.bind(this));
  },
  init: function() {
    this.binds();
    this.renderPage();
  }
};