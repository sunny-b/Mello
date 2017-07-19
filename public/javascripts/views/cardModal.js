var CardModalView = Backbone.View.extend({
  template: App.templates.cardModal,
  className: 'window',
  events: {
    'click .dialog-close-button': 'close',
    'click .js-edit-desc, .cancel.cancel-edit': 'toggleDescEditor',
    'submit .card-desc-form': 'editDescription',
    'click .js-move-card, .js-open-move-from-header': 'moveCardPop',
    'click .js-archive-card': 'deleteCardPop',
    'click .js-subscribe': 'subscribeToCard',
    'click .js-copy-card': 'copyCardPop',
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
    if (newName === '') return false;
      
    this.model.updateTitle(newName);
  },
  updateCard: function() {
    this.model.syncUp();
  },
  addComment: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var text = $f.find('.comment-box-input').val().trim();

    if (text === '') return false;

    this.model.addComment(text);
  },
  deleteComment: function(e) {
    e.preventDefault();

    var $e = $(e.currentTarget);
    var index = $e.closest('.phenom').index();

    this.model.deleteComment(index);
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
  copyCardPop: function(e) {
    this.updatePopOver(e, 'copyCard');
  },
  subscribeToCard: function(e) {
    e.preventDefault();

    this.model.toggleSubscribe();
  },
  editDescription: function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $f = $(e.currentTarget);
    var text = $f.find('.field').val().trim();
    
    this.model.editDescription(text);
  },
  moveCardPop: function(e) {
    this.updatePopOver(e, 'moveCard');
  },
  deleteCardPop: function(e) {
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
    this.listenTo(this.model, 'change update sync cardUpdated', this.render.bind(this));
  }
});