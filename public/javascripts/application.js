var App = {
  templates: JST,
  $header: $('header'),
  $main: $('main'),
  $windowOverlay: $('#window-overlay'),
  $popUp: $('.pop-over'),
  renderPage: function() {
    this.headerView = new HeaderView();
    this.boardView = new BoardView({
      collection: this.lists,
      title: 'Your Board'
    });
  },
  renderSearch: function(query) {
    var cards = new CardsCollection(this.searchCards(query));
    var $offset = $('.search').offset();
    var searchHeight = 30;
    var searchWidth = 180;

    this.closePopOver();
    this.popOver = new SearchView();
    this.$popUp.html(this.popOver.el);
    this.showPopOver($offset.top + searchHeight, $offset.left + searchWidth);

    if (cards.length > 1) {
      cards.each(function(card) {
        var $card = new CardView({ model: card });
        $('.search-cards').append($card.el);
      });
    } else {
      $('.pop-over-content').append("<h1>No Matches!</h1>")
    };
  },
  searchCards: function(query) {
    var results = []
    var regex = new RegExp(query, "i");

    this.lists.each(function(list) {
      list.get('cards').forEach(function(card) {
        var title = card.title;
        var description = card.description;
        debugger;
        if (regex.test(title) || regex.test(description)) {
          results.push(card);
        }
      });
    });

    return results;
  },
  renderCardModal: function(model, listID) {
    this.closePopOver();

    this.cardModal = new CardModalView({
      model: model,
      list: this.lists.findWhere({ id: listID })
    });

    this.$windowOverlay.html(this.cardModal.el).toggleClass('is-up');
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

    if (!this.popOver || this.popOver.model !== model) {
      if (action) {
        list = this.lists.get(model.get('listID'));

        this.popOver = new CardPopOverView({ lists: this.lists,
                                             card: model,
                                             list: list,
                                             action: action });
      } else {
        this.popOver = new ListPopOverView({ model: model, collection: this.lists });
      }

      this.$popUp.html(this.popOver.el);
      this.showPopOver(top, left);
    } else {
      this.$popUp.toggleClass('is-shown');
    }
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
    this.$windowOverlay.toggleClass('is-up');
  },
  updateCardPosition: function(oldID, newID, oldPosition, newPosition) {
    var card = this.lists.get(oldID).get('cards')[oldPosition];
    var self = this;

    $.ajax({
      url: '/cards/move',
      type: 'post',
      data: {
        newCardIndex: newPosition,
        listID: newID,
        card: JSON.stringify(card)
      },
      success: function(lists) {
        self.lists.reset(lists);
      }
    });
  },
  updateListPosition: function(newPosition, listID) {
    var list = this.lists.get(listID);
    var self = this;

    $.ajax({
      url: 'lists/move',
      type: 'post',
      data: {
        newIndex: newPosition,
        list: JSON.stringify(list.toJSON())
      },
      success: function(lists) {
        self.lists.reset(lists);
      }
    });
  },
  openNotifications: function() {
    var $offset = $('.notifications').offset();
    var popOverWidth = 272;

    this.closePopOver();
    this.popOver = new NotificationsView();
    this.$popUp.html(this.popOver.el);
    this.showPopOver($offset.top, $offset.left - popOverWidth);
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
  },
  init: function() {
    this.binds();
    this.renderPage();
  }
};