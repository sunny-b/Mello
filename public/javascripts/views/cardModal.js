var CardModalView = Backbone.View.extend({
  template: App.templates.cardModal,
  className: 'window',
  events: {
    'click .dialog-close-button': 'close',
    'click .js-edit-desc, .cancel.cancel-edit': 'toggleDescEditor',
    'submit .card-desc-form': 'addDescription',
    'click .js-move-card, .js-open-move-from-header': 'moveCard',
    'click .js-archive-card': 'deleteCard',
    'click .js-subscribe': 'subscribeToCard',
    'click .js-copy-card': 'copyCard',
    'click .js-edit-labels': 'openLabels',
    'keyup .comment-box-input': 'updateCommentBox',
    'submit .card-comment-form': 'addComment',
    'click .js-confirm-delete-action': 'deleteComment',
    'blur .js-card-detail-title-input': 'updateCardName',
    'click .js-add-due-date': 'openDatePicker'
  },
  toggleDescEditor: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var $e = $(e.currentTarget);
    $e.closest('.card-detail-item-block').toggleClass('editing');
  },
  openDatePicker: function(e) {
    this.updatePopOver(e, 'dueDate');
  },
  updateCardName: function(e) {
    e.preventDefault();

    var newName = $(e.currentTarget).val().trim();

    if (newName !== '') {
      this.model.set('title', newName);

      $.ajax({
        url: '/cards',
        type: 'put',
        data: {
          card: JSON.stringify(this.model.toJSON())
        }
      });
    }
  },
  addComment: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var text = $f.find('.comment-box-input').val().trim();
    this.model.addComment(text);

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        card: JSON.stringify(this.model.toJSON())
      }
    });
  },
  deleteComment: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    var index = $e.closest('.phenom').index();

    this.model.deleteComment(index);

    $.ajax({
      url: '/cards',
      type: 'put',
      data: {
        card: JSON.stringify(this.model.toJSON())
      }
    });
  },
  updateCommentBox: function(e) {
    var $e = $(e.currentTarget);

    if ($e.val().trim() !== '') {
      $('.js-add-comment').attr('disabled', false);
    } else {
      $('.js-add-comment').attr('disabled', true);
    }
  },
  updatePopOver: function(e, action) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    var offset = $e.offset();
    var top = offset.top;
    var left = offset.left;

    App.trigger('updatePopOver', this.model, top, left, action);
  },
  openLabels: function(e) {
    this.updatePopOver(e, 'labels');
  },
  close: function(e) {
    e.preventDefault();
    e.stopPropagation();

    App.trigger('closeCardModal');
  },
  copyCard: function(e) {
    this.updatePopOver(e, 'copyCard');
  },
  subscribeToCard: function(e) {
    e.preventDefault();

    var subscribeStatus = this.model.get('subscribed');
    this.model.set('subscribed', !subscribeStatus);

    $.ajax({
      url: '/cards',
      type: 'put',
      data: {
        card: JSON.stringify(this.model.toJSON())
      }
    });
  },
  addDescription: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var $f = $(e.currentTarget);
    var description = $f.find('.field').val().trim();
    this.model.set('description', description);

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        card: JSON.stringify(this.model.toJSON())
      }
    });
  },
  moveCard: function(e) {
    this.updatePopOver(e, 'moveCard');
  },
  deleteCard: function(e) {
    this.updatePopOver(e, 'deleteCard');
  },
  render: function() {
    this.$el.html(this.template({
      card: this.model.toJSON(),
      list: this.list.toJSON()
    }));
    this.delegateEvents();
  },
  initialize: function(options) {
    this.list = options.list;
    this.render();
    this.listenTo(this.model, 'change cardUpdated', this.render.bind(this));
  }
});