var NotificationView = Backbone.View.extend({
  template: App.templates.notification,
  className: "notification-wrapper",
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});