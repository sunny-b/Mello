var App = {
  templates: JST,
  $header: $('header'),
  $main: $('main'),
  $windowOverlay: $('#window-overlay'),
  $popUp: $('.pop-over'),
  renderPage: function() {
    this.headerView = new HeaderView({
      collection: this.board.notifications
    });
    this.boardView = new BoardView({
      model: this.board,
      collection: this.lists
    });
  },
  renderSearch: function(query) {
    var cards = this.searchCards(query);
    var $offset = $('.search').offset();
    var searchHeight = 30;
    var searchWidth = 180;

    this.closePopOver();
    this.popOver = new SearchView({ collection: cards });
    this.$popUp.html(this.popOver.el);
    this.showPopOver($offset.top + searchHeight, $offset.left + searchWidth);

    this.populateSearch(cards);
  },
  populateSearch: function(cards) {
    if (cards.length > 0) {
      cards.each(function(card) {
        var $card = new CardView({ model: card });
        $('.search-cards').append($card.el);
      });
    } else {
      $('.pop-over-content').append("<h1>No Matches!</h1>")
    };
  },
  searchCards: function(query) {
    var results = new CardsCollection();
    var regex = new RegExp(query, "i");

    this.lists.each(function(list) {
      list.cards.each(function(card) {
        var title = card.get('title');
        var description = card.get('description');

        if (regex.test(title) || regex.test(description)) {
          results.add(card);
        }
      });
    });

    return results;
  },
  retrieveCardByID: function(id) {
    var card;
    App.lists.each(function(list) {
      if (list.cards.get(id)) {
        card = list.cards.get(id);
      }
    });

    return card;
  },
  renderCardModal: function(model) {
    this.closePopOver();

    if (this.isNotCardObject(model)) {
      model = this.retrieveCardByID(model);
    }

    if (this.isUnDefined(model)) {
      alert('Card no longer exists');
      return false;
    }

    this.cardModal = new CardModalView({
      model: model,
      list: this.lists.findWhere({ id: model.get('listID') })
    });

    this.$windowOverlay.html(this.cardModal.el).toggleClass('is-up');
  },
  isUnDefined: function(item) {
    return item === undefined;
  },
  isNotCardObject: function(item) {
    return !(item instanceof CardModel);
  },
  openCardEditor: function(card) {
    this.cardEditor = new QuickEditView({ model: card });
    this.$main.append(this.cardEditor.el);
  },
  removeCardEditor: function() {
    this.cardEditor.remove();
  },
  updatePopOver: function(model, top, left, action) {
    var list;
    var halfElementWidth = 135;

    if (this.isNotCurrentPopOver(model)) {
      if (action) {
        list = this.lists.get(model.get('listID'));
        this.popOver = this.renderCardPopOver(model, list, action);
      } else {
        this.popOver = this.renderListPopOver(model);        
      }

      this.$popUp.html(this.popOver.el);
      this.showPopOver(top, left - halfElementWidth);
    } else {
      this.$popUp.toggleClass('is-shown');
    }
  },
  renderCardPopOver: function(model, list, action) {
    return new CardPopOverView({ lists: this.lists,
                                 card: model,
                                 list: list,
                                 action: action });
  },
  renderListPopOver: function(model) {
    return new ListPopOverView({ model: model, collection: this.lists });
  },
  isNotCurrentPopOver: function(model) {
    return !this.popOver || this.popOver.model !== model
  },
  showPopOver: function(top, left) {
    this.$popUp.removeClass('is-shown')
               .css({ top: top + 'px', left: left + 'px' })
               .addClass('is-shown');
  },
  closePopOver: function() {
    this.$popUp.removeClass('is-shown');
    
    if (this.popOver) {
      this.popOver.remove();
      this.popOver = null;
    }
  },
  closeCardModal: function() {
    this.closePopOver();
    this.cardModal.remove();
    this.$windowOverlay.removeClass('is-up');
  },
  updateCardPosition: function(oldID, newID, cardID, newPosition) {
    var card = this.lists.get(oldID).cards.get(cardID);

    this.lists.moveCard(newID, newPosition, card);
  },
  updateListPosition: function(newPosition, listID) {
    var list = this.lists.get(listID);

    this.lists.moveList(newPosition, list);
  },
  openNotifications: function() {
    var $offset = $('.notifications').offset();
    var popOverWidth = 312;
    var elementHeight = 30;
    var notifications = new NotificationsCollection(this.getNotifications());

    this.closePopOver();
    this.popOver = new NotificationsPopOverView();
    this.$popUp.html(this.popOver.el);
    this.showPopOver($offset.top + 30, $offset.left - popOverWidth);

    this.populateNotifications(notifications);
  },
  populateNotifications: function(notifications) {
    if (notifications.length > 0) {
      notifications.each(function(model) {
        var $model = new NotificationView({ model: model });
        $('.notifications').append($model.el);
      });
    } else {
      $('.pop-over-content').append('<p class="empty"><span>No Notifications</span></p>')
    };
  },
  getNotifications: function() {
    var notifications = this.board.get('notifications');
    var sortedResults = notifications.sort((obj1, obj2) => obj2.timestamp - obj1.timestamp);
    var truncatedResults = sortedResults.slice(0, 10);

    return truncatedResults;
  },
  moveList: function(newPosition, model) {
    this.lists.trigger('moveList', newPosition, model);
  },
  moveCard: function(newListID, newPosition, card) {
    this.lists.moveCard(newListID, newPosition, card);
    App.closeCardModal();
  },
  copyCard: function(newName, newListID, newPosition, card) {
    var newID = this.board.nextCardID();
    var list = this.board.listByID(newListID);
    
    list.copyCard(newName, newID, newPosition, card);
    this.board.incrementCardID();
    App.closeCardModal();
  },
  addNotification: function(type, text, card) {
    this.board.addNotification(type, text, card);
  },
  binds: function() {
    _.extend(this, Backbone.Events);
    this.on('openCardEditor', this.openCardEditor.bind(this));
    this.on('removeCardEditor', this.removeCardEditor.bind(this));
    this.on('renderPage', this.renderPage.bind(this));
    this.on('updatePopOver', this.updatePopOver.bind(this));
    this.on('closePopOver', this.closePopOver.bind(this));
    this.on('renderCardModal', this.renderCardModal.bind(this));
    this.on('closeCardModal', this.closeCardModal.bind(this));
    this.on('updateCardPosition', this.updateCardPosition.bind(this));
    this.on('updateListPosition', this.updateListPosition.bind(this));
    this.on('renderSearch', this.renderSearch.bind(this));
    this.on('openNotifications', this.openNotifications.bind(this));
    this.on('moveList', this.moveList.bind(this));
    this.on('moveCard', this.moveCard.bind(this));
    this.on('copyCard', this.copyCard.bind(this));
    this.on('addNotification', this.addNotification.bind(this));
    this.on('incrementCardID', this.board.incrementCardID.bind(this.board));
  },
  init: function() {
    this.lists = this.board.lists;
    this.binds();
    this.renderPage();
  }
};