var CardView = Backbone.View.extend({
  template: App.templates.card,
  tagName: 'li',
  events: {
    'click .card-edit-icon': 'openCardEditor'
  },
  openCardEditor: function(e) {
    e.preventDefault();

    App.trigger('openCardEditor', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});