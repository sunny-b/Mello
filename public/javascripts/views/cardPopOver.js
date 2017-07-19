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
  toggleLabel: function(e) {
    e.preventDefault();

    var color = $(e.currentTarget).data('color');
    this.card.toggleLabel(color);
  },
  convertMonth: function(monthNum) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return monthNames[monthNum];
  },
  removeDueDate: function(e) {
    e.preventDefault();

    this.card.removeDueDate();
    App.trigger('closePopOver');
  },
  updateDueDate: function(dateObj) {
    var dateDay = dateObj.selectedDay;
    var dateMonth = this.convertMonth(dateObj.selectedMonth);
    var dateYear = dateObj.selectedYear;
    var dateString = dateMonth + ' ' + dateDay + ', ' + dateYear;

    this.card.updateDueDate(dateString);
    App.trigger('closePopOver');
  },
  copyCard: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var newName = $f.find('.copy-card-text').val().trim();
    var newListID = this.parseSelectedValue($f.find('.js-select-list'));
    var newPosition = this.parseSelectedValue($f.find('.js-select-position'));
    var newCard = this.card.clone();

    if (newName === '') return false;

    App.trigger('copyCard', newName, newListID, newPosition, newCard)
  },
  deleteCard: function(e) {
    e.preventDefault();

    this.card.destroy();
  },
  moveCard: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var newList = this.parseSelectedValue($f.find('.js-select-list'));
    var newPosition = this.parseSelectedValue($f.find('.js-select-position'));

    App.trigger('moveCard', newList, newPosition, this.card)
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
    this.cards = this.list.cards;

    this.$el.html(this.templates[this.action]({
      lists: this.lists.toJSON(),
      list: this.list.toJSON(),
      cards: this.cards.toJSON(),
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

    this.listenTo(this.lists, 'update', App.closePopOver.bind(App));
    this.listenTo(this.cards, 'destroy remove', App.closeCardModal.bind(App));
  }
});