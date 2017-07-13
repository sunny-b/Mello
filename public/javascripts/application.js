var App = {
  templates: JST,
  $header: $('header'),
  $main: $('main'),
  $popUp: $('.pop-over'),
  renderPage: function() {
    this.headerView = new HeaderView();
    this.boardView = new BoardView({
      collection: this.lists,
      title: 'Your Board'
    });
  },
  openCardEditor: function(card) {
    this.cardEditor = new QuickEditView({ model: card });
    this.$main.append(this.cardEditor.el);
  },
  removeCardEditor: function() {
    this.cardEditor.remove();
  },
  openPopOver: function(model, top, left) {
    this.popOver = new PopOverView({ model: this.model });
    this.$popUp.html(this.popOver.el)
               .css({ top: top + 'px', left: left + 'px' })
               .addClass('is-shown');
  },
  binds: function() {
    _.extend(this, Backbone.Events);
    this.on('openCardEditor', this.openCardEditor.bind(this));
    this.on('removeCardEditor', this.removeCardEditor.bind(this));
    this.on('renderPage', this.renderPage.bind(this));
    this.on('openPopOver', this.openPopOver.bind(this));
  },
  init: function() {
    this.binds();
    this.renderPage();
  }
};