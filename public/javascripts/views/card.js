var CardView = Backbone.View.extend({
  template: App.templates.card,
  tagName: 'li',
  events: {
    'click .card-edit-icon': 'openCardEditor',
    'click .card': 'renderCardModal'
  },
  openCardEditor: function(e) {
    e.preventDefault();

    App.trigger('openCardEditor', this.model);
  },
  renderCardModal: function(e) {
    e.preventDefault();
    var cardID = this.model.get('id');
    var listID = this.model.get('listID');

    App.trigger('renderCardModal', cardOID, listID);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});