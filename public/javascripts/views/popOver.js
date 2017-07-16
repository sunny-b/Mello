var PopOverView = Backbone.View.extend({
  templates: {
    popOver: App.templates.popOver,
    copyList: App.templates.copyList,
    moveList: App.templates.moveList
  },
  className: 'pop-container',
  events: {
    'click .pop-close-btn': 'close',
    'click .js-add-card': 'addCard',
    'click .js-copy-list': 'renderCopyList',
    'click .js-archive': 'archiveList',
    'click .js-list-subscribe': 'subscribe',
    'click .js-move-list': 'renderMoveList',
    'change .js-select-list-pos': 'changePosition',
    'submit .pop-over-form': 'copyList',
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
    var newIndex = +(this.$('.value').text()) - 1;
    var self = this;
    
    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        newIndex: newIndex,
        list: JSON.stringify(this.model.toJSON())
      },
      success: function(lists) {
        self.collection.reset(lists);
      }
    });
  },
  copyList: function(e) {
    e.preventDefault();

    var copiedList = $.extend(true, {}, this.model.toJSON());
    var $f = $(e.currentTarget);
    var self = this;

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        newName: $f.find('.copy-list-textarea').val().trim(),
        copiedList: JSON.stringify(copiedList),
        list: JSON.stringify(this.model.toJSON())
      },
      success: function(lists) {
        self.collection.reset(lists);
      }
    });
  },
  archiveList: function(e) {
    e.preventDefault();

    var listID = this.model.get('id');
    this.collection.remove(listID);

    $.ajax({
      url: '/lists',
      type: 'delete',
      data: {
        listID: listID
      }
    });
  },
  subscribe: function(e) {
    e.preventDefault();

    var subscribeStatus = this.model.get('subscribed');
    this.model.set('subscribed', !subscribeStatus);

    $.ajax({
      url: '/lists',
      type: 'put',
      data: {
        list: JSON.stringify(this.model.toJSON())
      }
    });
  },
  changePosition: function() {
    value = parseInt(this.$('option:checked').text());
    this.$('.value').text(value);
  },
  renderMoveList: function(e) {
    e.preventDefault();
    var value;

    this.$el.html(this.templates.moveList({
      list: this.model.toJSON(),
      lists: this.collection.toJSON()
    }));

    this.delegateEvents();
    this.changePosition();
  },
  renderCopyList: function(e) {
    e.preventDefault();

    this.rerender(this.templates.copyList);
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
  }
});