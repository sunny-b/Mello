var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: 'li',
  $popUp: $('.pop-over'),
  events: {
    "click .open-card-composer": "openCardComposer",
    "click .cancel-edit": "closeCardComposer",
    "submit .list": "addCard",
    "blur .list-title": "updateListTitle",
    "click .list-hamburger": "openPopOver",
    "click .pop-close-btn": "closePopOver"
  },
  openCardComposer: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    $e.addClass('hide');
    $e.prev().removeClass('hide');
  },
  closeCardComposer: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    $e.closest('.card-composer')
      .addClass('hide')
      .next()
      .removeClass('hide');
  },
  openPopOver: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    var elementHeight = 10;
    var offset = $e.offset();
    var top = offset.top - elementHeight;
    var left = offset.left;

    App.trigger('updatePopOver', this.model, top, left);
  },
  addCard: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    var $f = this.$('.cardForm');
    var listID = $e.data('id');
    var cardName = $e.find('.new-card-title').val().trim();

    if (cardName.length === 0) return false;
    
    this.sendAJAX($f, cardName, listID);
  },
  sendAJAX: function($f, cardName, listID) {
    var self = this;

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        title: cardName,
        listID: listID
      },
      success: function(card) {
        self.collection.add(card);
      }
    });
  },
  updateListTitle: function(e) {
    var $e = $(e.currentTarget);
    var listName = $e.val();
    var id = $e.closest('.list').data('id');
    var self = this;

    $.ajax({
      url: '/lists',
      type: 'put',
      data: {
        listName: listName,
        id: id
      },
      success: function(card) {
        self.model.set('title', listName);
      }
    });
  },
  render: function() {
    var self = this;
    var modelView;
    this.$el.html(this.template(this.model.toJSON()));

    this.collection.each(function(model) {
      modelView = new CardView({ model: model });
      self.$('#cards').append(modelView.el);
    });
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add change', this.render.bind(this));
    this.listenTo(this.model, 'change', this.render.bind(this));
  }
});