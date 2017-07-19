var CardPopOverView = Backbone.View.extend({
  templates: {
    moveCard: App.templates.moveCard,
    deleteCard: App.templates.deleteCard,
    copyCard: App.templates.copyCard,
    labels: App.templates.labels,
    dueDate: App.templates.dueDate
  },
  className: 'pop-container',
  events: {
    'click .pop-close-btn': 'close',
    'change .js-select-position': 'changeSelectedPosition',
    'change .js-select-list': 'changeSelectedList',
    'submit .move-card-form': 'moveCard',
    'submit .delete-card-form': 'deleteCard',
    'submit .copy-card-form': 'copyCard',
    'click .js-select-label': 'toggleLabel',
    'click .js-remove-date': 'removeDueDate'
  },
  close: function(e) {
    e.preventDefault();

    App.trigger('closePopOver');
  },
  syncPut: function() {
    $.ajax({
      url: '/cards',
      type: 'put',
      data: {
        card: JSON.stringify(this.card.toJSON())
      }
    });
  },
  toggleLabel: function(e) {
    e.preventDefault();

    var color = $(e.currentTarget).data('color');
    this.card.toggleLabel(color);

    this.syncPut();
  },
  convertMonth: function(monthNum) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return monthNames[monthNum];
  },
  removeDueDate: function(e) {
    e.preventDefault();

    this.card.set('dueDate', null);
    this.syncPut();
    App.trigger('closePopOver');
  },
  updateDueDate: function(dateObj) {
    var dateDay = dateObj.selectedDay;
    var dateMonth = this.convertMonth(dateObj.selectedMonth);
    var dateYear = dateObj.selectedYear;
    var dateString = dateMonth + ' ' + dateDay + ', ' + dateYear;

    this.card.set('dueDate', dateString);
    this.syncPut();
    App.trigger('closePopOver');
  },
  copyCard: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var newName = $f.find('.copy-card-text').text().trim();
    var listID = this.parseSelectedValue($f.find('.js-select-list'));
    var cardIndex = this.parseSelectedValue($f.find('.js-select-position')) - 1;
    var copiedCard = $.extend(true, {}, this.card.toJSON());
    var self = this;

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        newCardIndex: cardIndex,
        listID: listID,
        newName: newName,
        card: JSON.stringify(copiedCard)
      },
      success: function(lists) {
        self.lists.reset(lists);
        App.trigger('closePopOver');
      }
    });
  },
  deleteCard: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var cardID = this.card.get('id');
    var listID = this.card.get('listID');
    var self = this;

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        cardID: cardID,
        listID: listID
      },
      success: function(lists) {
        self.lists.reset(lists);
        App.trigger('closeCardModal');
        App.trigger('closePopOver');
      }
    });
  },
  moveCard: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var listID = this.parseSelectedValue($f.find('.js-select-list'));
    var cardIndex = this.parseSelectedValue($f.find('.js-select-position')) - 1;
    var self = this;

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: {
        newCardIndex: cardIndex,
        listID: listID,
        card: JSON.stringify(this.card.toJSON())
      },
      success: function(lists) {
        self.lists.reset(lists);
        App.trigger('closePopOver');
      }
    });
  },
  parseSelectedList: function($e) {
    return $e.find('option:checked').text().replace(/ \(current\)/, '');
  },
  parseSelectedPos: function($e) {
    return parseInt($e.find('option:checked').text());
  },
  parseSelectedValue: function($e) {
    return $e.find('option:checked').val();
  },
  changeSelectedList: function(e) {
    var $e = $(e.currentTarget);
    var list = this.parseSelectedList($e);
    var id = this.parseSelectedValue($e);
    
    this.$('.js-list-value').text(list);
    this.changeList(id);
  },
  changeList: function(id) {
    this.list = this.lists.get(id);
    this.render();
  },
  changeSelectedPosition: function(e) {
    var $e = $(e.currentTarget);
    var value = this.parseSelectedPos($e);
    this.$('.js-pos-value').text(value);
  },
  setInitialSelected: function() {
    var list = this.parseSelectedList(this.$('.js-select-list'));
    var position = this.parseSelectedPos(this.$('.js-select-position'));

    this.$('.js-list-value').text(list);
    this.$('.js-pos-value').text(position);
  },
  setUpDatePicker: function() {
    var self = this;

    $.datepicker.setDefaults( $.extend( $.datepicker.regional[ '' ] ) );
    this.$('#datepicker').datepicker({
      onSelect: function(str, obj) {
        self.updateDueDate(obj)
      },
    });
  },
  render: function() {
    this.cards = this.list.get('cards');

    this.$el.html(this.templates[this.action]({
      lists: this.lists.toJSON(),
      list: this.list.toJSON(),
      cards: this.cards,
      card: this.card.toJSON()
    }));

    this.initialActions();
    this.delegateEvents();
  },
  initialActions: function() {
    if (this.action === 'moveCard' || this.action === 'copyCard') {
      this.setInitialSelected();  
    } else if (this.action === 'dueDate') {
      this.setUpDatePicker();
    }
  },
  initialize: function(options) {
    this.action = options.action;
    this.lists = options.lists;
    this.list = options.list;
    this.card = options.card;
    this.render();
  }
});