var CardModel = Backbone.Model.extend({
  deleteComment: function(index) {
    var comments = this.get('comments');

    comments.splice(index, 1);
    this.set('comments', comments);
    this.trigger('cardUpdated');
  },
  addComment: function(text) {
    var comments = this.get('comments') || [];
    
    comments.push({ text: text });
    this.set('comments', comments);
    this.trigger('cardUpdated');
  },
  toggleLabel: function(color) {
    var labels = this.get('labels');

    if (_(labels).findWhere({ color: color })) {
      labels = _(labels).reject({ color: color });
    } else {
      labels.push({ "color": color });
    };

    this.set("labels", labels);
    this.trigger('cardUpdated');
  }
});