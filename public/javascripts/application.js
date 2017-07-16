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
  renderCardModal: function(model, listID) {
    this.cardModal = new CardModal({
      model: model,
      list: this.lists.findWhere({ id: listId })
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

    if (!this.popOver || this.popOver.model !== model) {
      $popUp.removeClass('is-shown');

      this.popOver = new PopOverView({ model: model, collection: this.lists });
      $popUp.html(this.popOver.el)
            .css({ top: top + 'px', left: left + 'px' })
            .addClass('is-shown');
    } else {
      $popUp.toggleClass('is-shown');
    }
  },
  closePopOver: function() {
    var $popUp = $('.pop-over');

    $popUp.removeClass('is-shown');
    this.popOver.remove();
    this.popOver = null;
  },
  binds: function() {
    _.extend(this, Backbone.Events);
    this.on('openCardEditor', this.openCardEditor.bind(this));
    this.on('removeCardEditor', this.removeCardEditor.bind(this));
    this.on('renderPage', this.renderPage.bind(this));
    this.on('updatePopOver', this.updatePopOver.bind(this));
    this.on('closePopOver', this.closePopOver.bind(this));
    this.on('renderCardModal', this.closePopOver.bind(this));
  },
  init: function() {
    this.binds();
    this.renderPage();
  }
};