var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  id: "dashboard",
  render: function() {
    this.$el.html(this.template());
    App.$header.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});