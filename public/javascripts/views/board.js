var BoardView = Backbone.View.extend({
  template: App.templates.board,
  id: 'board-wrapper',
  events: {
    "click .add-list.idle": "openAddList",
    "click .cancel-edit": "closeAddList",
    "submit .add-list form": "addList"
  },
  render: function() {
    var self = this;
    var modelView;

    this.$el.html(this.template({
      title: this.title
    }));

    this.collection.each(function(model) {
      modelView = new ListView({ model: model});
      self.$el.find('ul').append(modelView.el);
    });
    
    App.$main.html(this.$el);
  },
  openAddList: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget);
    $e.removeClass('idle').find('.list-name-input').focus();
  },
  closeAddList: function(e) {
    e.preventDefault();
    e.stopPropagation();

    $(e.currentTarget).closest('.add-list').addClass('idle');
  },
  addList: function(e) {
    e.preventDefault();
    var $f = this.$('form');

    App.trigger('addList', $f);
  },
  initialize: function(options) {
    this.title = options.title;
    this.render()
  }
});