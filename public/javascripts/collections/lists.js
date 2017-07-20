var ListsCollection = Backbone.Collection.extend({
  model: ListModel,
  url: '/board/lists',
  moveList: function(position, model) {
    var self = this;

    this.remove(model);
    this.add(model, {at: position});
    this.syncUp();
  },
  moveCard: function(newListID, newPosition, card) {
    var newList = this.get(newListID);
    var newListCards = newList.cards;
    var oldListCards = this.get(card.get('listID')).cards;

    oldListCards.remove(card);
    card.set('listID', newList.get('id'))
    newListCards.add(card, { at: newPosition });

    if (card.get('subscribed')) {
      App.trigger('addNotification', 'move', 'moved', card);
    }
    
    [oldListCards, newListCards].forEach(cards => cards.syncUp());
  },
  syncUp: function() {
    this.sync("update", this);
  },
  initialize: function() {
    this.on("moveList", this.moveList.bind(this));
  } 
});