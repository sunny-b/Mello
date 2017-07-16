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
    var $f = this.$('.card-editor-form');
    var id = $e.data('id');
    var cardName = this.$('textarea').val();
    var listID = this.model.get('listID');
    this.model.set('title', cardName);

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        card: JSON.stringify(this.model.toJSON())
      },
      success: function() {
        App.trigger('removeCardEditor');
      }
    });
  },
  initialize: function(options) {
    this.render();
    this.$el.attr('data-id', options.model.get('id'));
  }
});