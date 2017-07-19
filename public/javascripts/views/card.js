var CardView = Backbone.View.extend({
  template: App.templates.card,
  tagName: 'li',
  events: {
    'click .card-edit-icon': 'openCardEditor',
    'click .card': 'renderCardModal'
  },
  openCardEditor: function(e) {
    e.preventDefault();
    e.stopPropagation();

    App.trigger('openCardEditor', this.model);
  },
  renderCardModal: function(e) {
    e.preventDefault();

    App.trigger('renderCardModal', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change cardUpdated', this.render.bind(this));
  }
});