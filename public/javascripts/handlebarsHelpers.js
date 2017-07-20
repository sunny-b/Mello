Handlebars.registerHelper("selectedPosition", function(context, list) {
  var ret = '';
  var item;

  for (var i = 0; i < context.length; i++) {
    item = context[i];
    ret += '<option value="';
    ret += item.id === list.id ? i + '" selected>' : i + '">';
    ret += (i + 1);
    ret += item.id === list.id ? ' (current)' : '';
    ret += '</option>'
  }

  return ret;
});

Handlebars.registerHelper("selectedLists", function(context, list) {
  var ret = '';
  var item;

  for (var i = 0; i < context.length; i++) {
    item = context[i];
    ret += '<option value="';
    ret += item.id === list.id ? item.id + '" selected>' : item.id + '">';
    ret += item.title;
    ret += item.id === list.id ? ' (current)' : '';
    ret += '</option>'
  }

  return ret;
});

Handlebars.registerHelper("selectedPositionPlusOne", function(context) {
  var ret = '';

  for (var i = 0; i < context.length + 1; i++) {
    ret += '<option value="' + i + '">' + (i + 1) + '</option>';
  }

  return ret;
});

Handlebars.registerHelper('ifCurrentList', function(options) {
  if (this.list.id === this.card.listID) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('ifCommentType', function(options) {
  if (this.type === 'comment') {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});