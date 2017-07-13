var BoardView = Backbone.View.extend({
  template: App.templates.board,
  el: App.$main.get(0),
  events: {
    "click .add-list.idle": "openAddList",
    "click .add-list .cancel-edit": "closeAddList",
    "submit .add-list form": "addList"
  },
  render: function() {
    var self = this;
    var modelView;

    this.$el.html(this.template({
      title: this.title
    }));

    this.collection.each(function(model) {
      modelView = new ListView({
        model: model,
        collection: new CardsCollection(model.get('cards'))
      });
      self.$('#lists').append(modelView.el);
    });
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
    e.stopPropagation();

    var $f = this.$('#listForm');
    var listName = $f.find('.list-name-input').val().trim();
    
    if (listName.length === 0) return false;

    this.sendAJAX($f);
  },
  sendAJAX: function($f) {
    var self = this;

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        self.collection.add(json);
      }
    });
  },
  initialize: function(options) {
    this.title = options.title;
    this.render();
    this.listenTo(this.collection, 'add', this.render.bind(this));
  }
});