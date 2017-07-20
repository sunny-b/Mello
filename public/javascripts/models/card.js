var CardModel = Backbone.Model.extend({
  deleteComment: function(index) {
    var comments = this.get('comments');
    comments.splice(index, 1);
    this.set('comments', comments);

    if (this.isSubscribed()) {
      App.trigger('addNotification', 'other', 'removed comment from', this);
    }

    this.syncUp();
  },
  addComment: function(text) {
    var comments = this.get('comments') || [];
    comments.push({ text: text });
    this.set('comments', comments);

    if (this.isSubscribed()) {
      App.trigger('addNotification', 'comment', text, this);
    }

    this.syncUp();
  },
  isSubscribed: function() {
    return !!this.get('subscribed');
  },
  editDescription: function(desc) {
    this.set('description', desc);

    if (this.isSubscribed()) {
      App.trigger('addNotification', 'description', 'edited description of', this);
    }

    this.syncUp();
  },
  updateTitle: function(title) {
    if (this.isSubscribed()) {
      App.trigger('addNotification', 'title', 'edited title of', this);
    }

    this.set('title', title);
    this.syncUp();
  },
  syncUp: function() {
    this.sync("update", this);
    this.trigger('cardUpdated');     
  },
  removeDueDate: function() {
    if (this.isSubscribed()) {
      App.trigger('addNotification', 'dueDate', 'removed due date from', this);
    }

    this.set('dueDate', null);
    this.syncUp();
  },
  updateDueDate: function(date) {
    if (this.isSubscribed()) {
      App.trigger('addNotification', 'dueDate', 'updated due date of', this);
    }

    this.set('dueDate', date);
    this.syncUp();
  },
  toggleLabel: function(color) {
    var labels = this.get('labels');

    if (_(labels).findWhere({ color: color })) {
      labels = _(labels).reject({ color: color });
    } else {
      labels.push({ "color": color });
    };

    if (this.isSubscribed()) {
      App.trigger('addNotification', 'label', 'updated labels of', this);
    }

    this.set("labels", labels);
    this.syncUp();
  },
  toggleSubscribe: function() {
    var subscribeStatus = this.get('subscribed');

    this.set('subscribed', !subscribeStatus);
    this.syncUp();
  },
  initialize: function(data) {   
    this.url = '/board/' + data.listID + '/cards/' + this.id;
  }, 
});