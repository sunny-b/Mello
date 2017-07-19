var SearchView = Backbone.View.extend({
  template: App.templates.search,
  className: 'pop-container search',
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