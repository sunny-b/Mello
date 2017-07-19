var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  id: "dashboard",
  events: {
    'keyup .search': 'searchCards',
    'blur .search': 'preventClose',
    'click .notifications': 'openNotifications'
  },
  openNotifications: function(e) {
    e.preventDefault();

    App.trigger('openNotifications');
  },
  preventClose: function(e) {
    e.preventDefault();
  },
  searchCards: function(e) {
    var $e = $(e.currentTarget);
    var query = $e.val().trim();

    App.trigger('renderSearch', query);
  },
  render: function() {
    this.$el.html(this.template());
    App.$header.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});