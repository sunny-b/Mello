var CardModel = Backbone.Model.extend({
  deleteComment: function(index) {
    var comments = this.get('comments');
    comments.splice(index, 1);
    this.set('comments', comments);
    this.syncUp();
  },
  addComment: function(text) {
    var comments = this.get('comments') || [];
    comments.push({ text: text });
    this.set('comments', comments);
    this.syncUp();
  },
  editDescription: function(desc) {
    this.set('description', desc);
    this.syncUp();
  },
  updateTitle: function(title) {
    this.set('title', title);
    this.syncUp();
  },
  syncUp: function() {
    this.sync("update", this);
    this.trigger('cardUpdated');     
  },
  updateDueDate: function(date) {
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