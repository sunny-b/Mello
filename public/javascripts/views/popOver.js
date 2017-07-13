var PopOverView = Backbone.View.extend({
  template: App.templates.popOver,
  className: 'pop-container',
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});