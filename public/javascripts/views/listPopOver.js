var ListPopOverView = Backbone.View.extend({
  templates: {
    popOver: App.templates.popOver,
    moveList: App.templates.moveList
  },
  className: 'pop-container',
  events: {
    'click .pop-close-btn': 'close',
    'click .js-add-card': 'addCard',
    'click .js-archive': 'archiveList',
    'click .js-move-list': 'renderMoveList',
    'change .js-select-list-pos': 'changePosition',
    'submit .move-list-form': 'moveList'
  },
  close: function(e) {
    e.preventDefault();

    App.trigger('closePopOver');
  },
  addCard: function(e) {
    e.preventDefault();
    var listID = this.model.get('id');
    
    this.model.trigger('addCard', listID);
    App.trigger('closePopOver');
  },
  moveList: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var newPosition = +$f.find('option:checked').val();
    
    App.trigger('moveList', newPosition, this.model);
  },
  archiveList: function(e) {
    e.preventDefault();
    this.model.destroy();
  },
  changePosition: function() {
    value = parseInt(this.$('option:checked').text());
    this.$('.value').text(value);
  },
  renderMoveList: function(e) {
    e.preventDefault();

    this.$el.html(this.templates.moveList({
      list: this.model.toJSON(),
      lists: this.collection.toJSON()
    }));

    this.delegateEvents();
    this.changePosition();
  },
  render: function() {
    this.rerender(this.templates.popOver);
  },
  rerender: function(template) {
    this.$el.html(template(this.model.toJSON()));
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change', this.render.bind(this));
    this.listenTo(this.model, 'destroy', App.closePopOver.bind(App));
    this.listenTo(this.collection, 'update', App.closePopOver.bind(App));
  }
});