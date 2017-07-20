var CommentView = Backbone.View.extend({
  template: App.templates.comment,
  className: "phenom mod-comment-type",
  events: {},
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});