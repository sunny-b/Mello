this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"board-wrapper\"><div class=\"board-header\"><a href=\"#\" class=\"board-title-container\"><span class=\"board-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a><span class=\"private\">Private</span></div><div id=\"board\"><div class=\"board-canvas\"><ul id=\"lists\"></ul><div class=\"add-list idle\"><form id=\"listForm\" method=\"post\" action=\"/lists\"><span class=\"placeholder open-add-list\">Add a list…</span><input class=\"list-name-input\" type=\"text\" name=\"title\" placeholder=\"Add a list…\" autocomplete=\"off\" dir=\"auto\" maxlength=\"512\"><div class=\"list-add-controls\"><input class=\"primary save-edit\" type=\"submit\" value=\"Save\"><a class=\"cancel-edit icon-lg\" href=\"#\"></a></div></form></div><div class=\"extra-space\"></div></div></div><div class=\"pop-over\"></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"card-edit-icon\"></span><div class=\"card-details\"><div class=\"card-labels\"></div><span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span><div class=\"badges\"></div></div></div>";
},"useData":true});

this["JST"]["copyList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Copy List</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><form method=\"post\" action=\"/lists/copy\" class=\"pop-over-form\"><div class=\"list-card\"><div class=\"list-card-details\"><textarea class=\"list-card-edit-title copy-list-textarea focus\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 90px;\" autofocus onclick=\"this.focus();this.select()\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div></div><input class=\"primary save-edits\" type=\"submit\" value=\"Create List\"></form></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-bar\"><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" value=\"\"><span class=\"search-icon icon-lg\"></span></div><div class=\"logo\"></div><div class=\"info\"><a href=\"#\" class=\"box icon-lg\" class=\"notifications\"><span class=\"notification-icon\"></span></a><div class=\"box icon-lg user\"><span class=\"user-icon\"></span></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"list-header-extras-subscribe js-list-subscribed\"><span class=\"icon-subscribe\"></span></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"list-header\"><textarea class=\"list-title\" spellcheck=\"false\" dir=\"auto\" maxlength=\"512\" style=\"overflow: hidden; word-wrap: break-word; height: 24px;\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"list-extras\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a class=\"list-hamburger\" href=\"#\"><span class=\"list-icon\">...</span></a></div></div><div class=\"list-cards\"><ul id=\"cards\"></ul></div><div class=\"card-composer hide\"><form class=\"cardForm\" method=\"post\" action=\"/cards\"><div class=\"list-card composer\"><textarea name=\"title\" class=\"list-card-composer-textarea new-card-title\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; resize: none;\"></textarea></div><div class=\"card-add-controls\"><input class=\"primary save-edit\" type=\"submit\" value=\"Add\"><a class=\"cancel-edit icon-lg\" href=\"#\"></a></div></form></div><a href=\"#\" class=\"open-card-composer\">Add a card...</a></div>";
},"useData":true});

this["JST"]["moveList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Move List</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><form class=\"move-list-form\" action=\"/lists/move\" method=\"post\"><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-full\"><span class=\"label\">Position</span><span class=\"value js-pos-value\"></span><label>Position</label><select class=\"js-select-list-pos\">"
    + ((stack1 = (helpers.selected || (depth0 && depth0.selected) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.lists : depth0),(depth0 != null ? depth0.list : depth0),{"name":"selected","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div></div><input class=\"primary wide js-commit-position\" type=\"submit\" value=\"Move\"></form></div>";
},"useData":true});

this["JST"]["popOver"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-sm icon-check\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">List Actions</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><ul class=\"pop-over-list\"><li><a class=\"js-add-card\" href=\"#\">Add Card…</a></li><li><a class=\"js-copy-list\" href=\"#\">Copy List…</a></li><li><a class=\"js-move-list\" href=\"#\">Move List…</a></li><li><a class=\"highlight-icon js-list-subscribe\" href=\"#\">Subscribe"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li><li><a class=\"highlight-icon js-archive\" href=\"#\">Archive</a></li></ul></div>";
},"useData":true});

this["JST"]["quickEdit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"quick-card-edit-box\" style=\"top: "
    + alias4(((helper = (helper = helpers.top || (depth0 != null ? depth0.top : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"top","hash":{},"data":data}) : helper)))
    + "px; left: "
    + alias4(((helper = (helper = helpers.left || (depth0 != null ? depth0.left : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"left","hash":{},"data":data}) : helper)))
    + "px;\"><form method=\"put\" action=\"/cards\" class=\"card-editor-form\"><div class=\"list-card\"><div class=\"list-card-details\"><textarea class=\"list-card-edit-title edit-card-title\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 90px;\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div></div><input class=\"primary save-edits\" type=\"submit\" value=\"Save\"><span class=\"cancel-edit white-hover icon-lg\"></span></form></div>";
},"useData":true});