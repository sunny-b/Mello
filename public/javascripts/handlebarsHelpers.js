Handlebars.registerHelper("selected", function(context, list) {
  var ret = '';
  var item;

  for (var i = 0; i < context.length; i++) {
    item = context[i];
    ret += '<option value="';
    ret += item.id === list.id ? item.id + '" selected>' : item.id + '">';
    ret += (i + 1);
    ret += item.id === list.id ? ' (current)' : '';
    ret += '</option>'
  }

  return ret;
});
