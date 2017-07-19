var ListModel = Backbone.Model.extend({
  cardByID: function(id) {
    return this.cards.findWhere({id : id});
  },
  parse: function(data) {
    var omitKeys = []

    if (data.cards) {
        this.cards.reset(data.cards);
        omitKeys.push('cards');
    }

    if (data.subscribed) {
      this.set("subscribed", data.subscribed);
      omitKeys.push('subscribed');
    }

    return _.omit(data, omitKeys); 
  },
  syncServer: function() {
    this.sync("update", this);
  },
  copyCard: function(newName, newID, newPosition, card) {
    card.set('title', newName);
    card.set('id', newID);
    card.set('listID', this.get('id'));

    this.cards.add(card, { at: newPosition });
    this.cards.syncUp();
  },
  editTitle: function(text) {
    this.set('title', text);
    this.syncUp();
  },
  toggleSubscribed: function() {
    var self = this;
    var status = this.get("subscribed");
    this.set("subscribed", !status);

    this.syncUp();
  },
  syncUp: function() {
    this.sync("update", this);
  },
  initialize: function(list) {
    this.cards = new CardsCollection();
    this.url = "/board/" + list.id;
    this.cards.url = "/board/" + list.id + "/cards";
    this.cards.parentList = this;
    this.parse(list);
    this.on("subscribeToggle", this.toggleSubscribed.bind(this));    
  }, 
});