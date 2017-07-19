var QuickEditView = Backbone.View.extend({
  template: App.templates.quickEdit,
  className: 'quick-card-editor',
  events: {
    'click .cancel-edit': 'removeEditor',
    'submit': 'updateCardName'
  },
  render: function() {
    var id = this.model.get('id');
    var offset =  $('.card[data-id=' + id + ']').offset();
    var top = offset.top;
    var left = offset.left;

    this.$el.html(this.template({
      title: this.model.get('title'),
      left: left,
      top: top
    }));
    this.delegateEvents();
  },
  removeEditor: function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    App.trigger('removeCardEditor');
  },
  updateCardName: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget);
    var cardName = this.$('textarea').val();
    if (cardName === '') return false;

    this.model.updateTitle(cardName);
    App.trigger('removeCardEditor');
  },
  initialize: function(options) {
    this.render();
  }
});