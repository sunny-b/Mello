var PopOverView = Backbone.View.extend({
  template: App.templates.popOver,
  className: 'pop-container',
  events: {
    'click .pop-close-btn': 'close'
  },
  close: function(e) {
    e.preventDefault();

    App.trigger('closePopOver');
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});