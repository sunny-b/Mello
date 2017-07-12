var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: 'li',
  events: {
    "click .open-card-composer": "openCardComposer",
    "click .cancel-edit": "closeCardComposer",
    "submit .list": "addCard"
  },
  openCardComposer: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    $e.addClass('hide');
    $e.prev().removeClass('hide');
  },
  closeCardComposer: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    $e.closest('.card-composer')
      .addClass('hide')
      .next()
      .removeClass('hide');
  },
  addCard: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var $e = $(e.currentTarget);
    var $f = this.$('.cardForm');
    var listID = $e.data('id');
    var cardName = $e.find('.card-title').val().trim();

    if (cardName.length === 0) return false;

    App.trigger('addCard', $f, listID, cardName);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});