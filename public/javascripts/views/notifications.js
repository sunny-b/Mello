var NotificationsPopOverView = Backbone.View.extend({
  template: App.templates.notifications,
  className: 'pop-container notification',
  events: {
    'click .pop-close-btn': 'close',
    'click .action-card': 'renderCardModal'
  },
  close: function(e) {
    e.preventDefault();

    App.trigger('closePopOver');
  },
  renderCardModal: function(e) {
    e.preventDefault();
    var cardID = $(e.currentTarget).data('id');

    App.trigger('renderCardModal', cardID);
  },
  render: function() {
    this.$el.html(this.template());
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});