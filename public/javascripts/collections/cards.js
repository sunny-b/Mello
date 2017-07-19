var CardsCollection = Backbone.Collection.extend({
  model: CardModel,
  syncUp: function() {
    this.sync("update", this);
  }
});