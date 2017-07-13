var App = {
  templates: JST,
  $header: $('header'),
  $main: $('main'),
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
  updatePopOver: function(model, top, left) {
    var $popUp = $('.pop-over');

    if ($popUp.hasClass('is-shown')) {
      this.closePopOver();
    } else {
      this.popOver = new PopOverView({ model: model });
      $popUp.html(this.popOver.el)
                 .css({ top: top + 'px', left: left + 'px' })
                 .addClass('is-shown');
    }
  },
  closePopOver: function() {
    var $popUp = $('.pop-over');

    this.popOver.remove();
    $popUp.removeClass('is-shown');
  },
  binds: function() {
    _.extend(this, Backbone.Events);
    this.on('openCardEditor', this.openCardEditor.bind(this));
    this.on('removeCardEditor', this.removeCardEditor.bind(this));
    this.on('renderPage', this.renderPage.bind(this));
    this.on('updatePopOver', this.updatePopOver.bind(this));
    this.on('closePopOver', this.closePopOver.bind(this));
  },
  init: function() {
    this.binds();
    this.renderPage();
  }
};