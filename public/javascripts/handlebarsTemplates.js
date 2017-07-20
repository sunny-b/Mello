this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"board-wrapper\"><div class=\"board-header\"><a href=\"#\" class=\"board-title-container\"><span class=\"board-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a><span class=\"private\">Private</span></div><div id=\"board\"><div class=\"board-canvas\"><ul id=\"lists\"></ul><div class=\"add-list idle\"><form id=\"listForm\" method=\"post\" action=\"/board/lists\"><span class=\"placeholder open-add-list\">Add a list…</span><input class=\"list-name-input\" type=\"text\" name=\"title\" placeholder=\"Add a list…\" autocomplete=\"off\" dir=\"auto\" maxlength=\"512\"><div class=\"list-add-controls\"><input class=\"primary save-edit\" type=\"submit\" value=\"Save\"><a class=\"cancel-edit icon-lg\" href=\"#\"></a></div></form></div><div class=\"extra-space\"></div></div></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"card-label card-label-"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.color : depth0), depth0))
    + " mod-card-front\" title=\"\">&nbsp;</span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge is-icon-only\" title=\"You are subscribed to this card.\"><span class=\"badge-icon icon-sm icon-subscribe\"></span></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"badge is-due-future\" title=\"This card is due later.\"><span class=\"badge-icon icon-sm icon-clock\"></span><span class=\"badge-text\">"
    + container.escapeExpression(((helper = (helper = helpers.dueDate || (depth0 != null ? depth0.dueDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge is-icon-only\" title=\"This card has a description.\"><span class=\"badge-icon icon-sm icon-description\"></span></div>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge\" title=\"Comments\"><span class=\"badge-icon icon-sm icon-comment\"></span><span class=\"badge-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span></div></span><span class=\"js-plugin-badges\"><span></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"card-edit-icon\"></span><div class=\"card-details\"><div class=\"list-card-labels js-card-labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span><div class=\"badges\"><span class=\"js-badges\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span></div></div></div>";
},"useData":true});

this["JST"]["cardModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "hide";
},"3":function(container,depth0,helpers,partials,data) {
    return "<span class=\"card-label card-label-"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.color : depth0), depth0))
    + " mod-card-detail mod-clickable\" title=\"\">&nbsp;</span>";
},"5":function(container,depth0,helpers,partials,data) {
    return "is-on";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"window-wrapper js-tab-parent\"><a class=\"icon-lg icon-close dialog-close-button js-close-window\" href=\"#\"></a><div class=\"card-detail-window u-clearfix\"><div class=\"window-header\"><span class=\"window-header-icon icon-lg icon-card\"></span><div class=\"window-title\"><textarea class=\"mod-card-back-title js-card-detail-title-input\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; height: 15px;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</textarea></div><div class=\"window-header-inline-content quiet js-current-list\"><p class=\"u-inline-block u-bottom\">in list <a class=\"js-open-move-from-header\" href=\"#\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a></p></div><div class=\"window-header-inline-content "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.subscribed : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " js-subscribed-indicator-header\"><span class=\"icon-sm icon-subscribe\"></span></div></div><div class=\"window-main-col\"><div class=\"card-detail-data u-gutter\"><div class=\"card-detail-item card-detail-item-labels u-clearfix "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " js-card-detail-labels\"><h3 class=\"card-detail-item-header\">Labels</h3><div class=\"u-clearfix js-card-detail-labels-list js-edit-label\">"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"card-detail-item js-card-detail-due-date "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.dueDate : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><h3 class=\"card-detail-item-header\">Due Date</h3><span class=\"card-detail-badge card-detail-due-date-badge js-card-detail-due-date-badge is-clickable is-due-future\" title=\"This card is due later.\"><span class=\"js-date-text card-detail-due-date-text js-details-edit-due-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.dueDate : stack1), depth0))
    + "</span></span></div><div class=\"card-detail-item card-detail-item-block u-clearfix editable\"><h3 class=\"card-detail-item-header js-show-with-desc "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">Description</h3><a class=\"card-detail-item-header-edit hide-on-edit js-show-with-desc js-edit-desc "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#\">Edit</a><div class=\"description-content js-desc-content\"><div class=\"current markeddown hide-on-edit js-card-desc js-show-with-desc\" dir=\"auto\"><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p></div><p class=\"u-bottom\"><a class=\"quiet-button mod-with-image hide-on-edit js-edit-desc js-hide-with-desc "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#\"><span class=\"icon-sm icon-description quiet-button-icon\"></span>&nbsp;Edit the description…</a></p><div class=\"card-detail-edit edit\"><form class=\"card-desc-form\" action=\"/cards\" method=\"put\"><textarea class=\"field\" placeholder=\"Add a more detailed description…\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 108px;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0))
    + "</textarea><div class=\"edit-controls u-clearfix\"><input class=\"primary confirm mod-submit-edit js-save-edit\" type=\"submit\" value=\"Save\"><a class=\"icon-lg icon-close dark-hover cancel cancel-edit\" href=\"#\"></a></div></form></div></div></div></div><div class=\"window-module add-comment-section\"><div class=\"window-module-title window-module-title-no-divider\"><span class=\"window-module-title-icon icon-lg icon-comment\"></span><h3>Add Comment</h3></div><div class=\"new-comment js-new-comment\"><div class=\"member member-no-menu\"></div><form class=\"card-comment-form\" action=\"/cards\" method=\"put\"><div class=\"comment-frame\"><div class=\"comment-box\"><textarea class=\"comment-box-input js-new-comment-input\" placeholder=\"Write a comment…\" tabindex=\"1\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; height: 75px;\"></textarea></div></div><div class=\"comment-controls u-clearfix\"><input class=\"primary confirm mod-no-top-bottom-margin js-add-comment\" tabindex=\"3\" type=\"submit\" value=\"Save\" disabled=\"\"></div></form></div></div><div class=\"window-module\"><div class=\"window-module-title window-module-title-no-divider\"><span class=\"window-module-title-icon icon-lg icon-activity\"></span><h3>Activity</h3></div><div class=\"js-list-actions list-comments\"></div></div></div><div class=\"window-sidebar\"><div class=\"window-module u-clearfix\"><h3>Add</h3><div class=\"u-clearfix\"><a class=\"button-link js-edit-labels\" href=\"#\"><span class=\"icon-sm icon-label\"></span>&nbsp;Labels</a><a class=\"button-link js-add-due-date\" href=\"#\"><span class=\"icon-sm icon-clock\"></span>&nbsp;Due Date</a></div></div><div class=\"window-module other-actions u-clearfix\"><h3>Actions</h3><div class=\"u-clearfix\"><a class=\"button-link js-move-card\" href=\"#\"><span class=\"icon-sm icon-move\"></span>&nbsp;Move</a><a class=\"button-link js-copy-card\" href=\"#\"><span class=\"icon-sm icon-card\"></span>&nbsp;Copy</a><div class=\"js-subscribe-sidebar-button\"><a class=\"button-link js-subscribe "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" title=\"Subscribe to the card to get notifications when something changes.\"><span class=\"icon-sm icon-subscribe\"></span>&nbsp;Subscribe<span class=\"on\"><span class=\"icon-sm icon-check light\"></span></span></a></div><a class=\"button-link js-archive-card\" href=\"#\"><span class=\"icon-sm icon-archive\"></span>&nbsp;Archive</a></div></div></div></div></div>";
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"phenom-creator\"><div class=\"member js-show-mem-menu\" idmember=\"5960fe60783922c510c83ede\"><span class=\"member-gold-badge\" title=\"This member has Trello Gold.\"></span></div></div><div class=\"phenom-desc\"><span class=\"inline-member js-show-mem-menu\" idmember=\"5960fe60783922c510c83ede\"><span class=\"u-font-weight-bold\">User</span></span><div class=\"comment-container\"><div class=\"action-comment markeddown js-comment\" dir=\"auto\"><div class=\"current-comment js-friendly-links js-open-card\"><p>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</p></div></div></div></div><p class=\"phenom-meta quiet\"><span class=\"js-hide-on-sending\"><a class=\"js-confirm-delete-action\" href=\"#\">Delete</a></span></p>";
},"useData":true});

this["JST"]["copyCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Copy Card</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><form class=\"copy-card-form\" method=\"post\" action=\"/cards/copy\"><label>Title</label><textarea class=\"js-autofocus copy-card-text\" name=\"name\" style=\"margin-bottom: 12px;\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</textarea><label>Copy to…</label><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-threequarters\"><span class=\"label\">List</span><span class=\"value js-list-value\"></span><label>List</label><select class=\"js-select-list\">"
    + ((stack1 = (helpers.selectedLists || (depth0 && depth0.selectedLists) || alias2).call(alias1,(depth0 != null ? depth0.lists : depth0),(depth0 != null ? depth0.list : depth0),{"name":"selectedLists","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"button-link setting form-grid-child form-grid-child-quarter\"><span class=\"label\">Position</span><span class=\"value js-pos-value\"></span><label>Position</label><select class=\"js-select-position\">"
    + ((stack1 = (helpers.selectedPositionPlusOne || (depth0 && depth0.selectedPositionPlusOne) || alias2).call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"selectedPositionPlusOne","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div></div><input class=\"primary wide js-commit-position\" type=\"submit\" value=\"Create Card\"></form></div>";
},"useData":true});

this["JST"]["copyList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Copy List</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><form method=\"post\" action=\"/lists/copy\" class=\"pop-over-form\"><div class=\"list-card\"><div class=\"list-card-details\"><textarea class=\"list-card-edit-title copy-list-textarea focus\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 90px;\" autofocus onclick=\"this.focus();this.select()\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div></div><input class=\"primary save-edits\" type=\"submit\" value=\"Create List\"></form></div>";
},"useData":true});

this["JST"]["deleteCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Delete Card</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><form class=\"delete-card-form\" method=\"delete\" action=\"/cards\"><div class=\"delete-text\"><p>All actions will be removed from the activity feed and you won’t be able to re-open the card. There is no undo.</p><input class=\"js-confirm full negate\" type=\"submit\" value=\"Delete\"></div></form></div>";
},"useData":true});

this["JST"]["dueDate"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Change Due Date</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><div id=\"datepicker\"></div><input class=\"negate remove-date js-remove-date\" type=\"button\" value=\"Remove\"></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-bar\"><input class=\"search\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" value=\"\"><span class=\"search-icon icon-lg\"></span></div><div class=\"logo\"></div><div class=\"info\"><a href=\"#\" class=\"box notifications icon-lg\" class=\"notifications\"><span class=\"notification-icon\"></span></a><div class=\"box icon-lg user\"><span class=\"user-icon\"></span></div></div>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Labels</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><ul class=\"edit-labels-pop-over js-labels-list\"><li><span class=\"card-label mod-selectable card-label-green js-select-label\" data-color=\"green\"></span></li><li><span class=\"card-label mod-selectable card-label-yellow js-select-label\" data-color=\"yellow\"></span></li><li><span class=\"card-label mod-selectable card-label-orange js-select-label\" data-color=\"orange\"></span></li><li><span class=\"card-label mod-selectable card-label-red js-select-label selected\" data-color=\"red\"></span></li><li><span class=\"card-label mod-selectable card-label-purple js-select-label\" data-color=\"purple\"></span></li><li><span class=\"card-label mod-selectable card-label-blue js-select-label\" data-color=\"blue\"></span></li></ul></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"list-header-extras-subscribe js-list-subscribed\"><span class=\"icon-subscribe\"></span></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"list-header\"><div class=\"list-header-target js-editing-target\"></div><textarea class=\"list-title\" spellcheck=\"false\" dir=\"auto\" maxlength=\"512\" style=\"overflow: hidden; word-wrap: break-word; height: 24px;\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"list-extras\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a class=\"list-hamburger\" href=\"#\"><span class=\"list-icon\">...</span></a></div></div><div class=\"list-cards\"><ul class=\"cards\"></ul></div><div class=\"card-composer hide\"><form class=\"cardForm\" method=\"post\" action=\"/board/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/cards\"><div class=\"list-card composer\"><textarea name=\"title\" class=\"list-card-composer-textarea new-card-title\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; resize: none;\"></textarea></div><div class=\"card-add-controls\"><input class=\"primary save-edit\" type=\"submit\" value=\"Add\"><a class=\"cancel-edit icon-lg\" href=\"#\"></a></div></form></div><a href=\"#\" class=\"open-card-composer\">Add a card...</a></div>";
},"useData":true});

this["JST"]["moveCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.selectedPosition || (depth0 && depth0.selectedPosition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cards : depth0),(depth0 != null ? depth0.card : depth0),{"name":"selectedPosition","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.selectedPositionPlusOne || (depth0 && depth0.selectedPositionPlusOne) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cards : depth0),{"name":"selectedPositionPlusOne","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, buffer = 
  "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Move Card</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><form class=\"move-card-form\" method=\"post\" action=\"/cards/move\"><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-threequarters\"><span class=\"label\">List</span><span class=\"value js-list-value\"></span><label>List</label><select class=\"js-select-list\">"
    + ((stack1 = (helpers.selectedLists || (depth0 && depth0.selectedLists) || alias2).call(alias1,(depth0 != null ? depth0.lists : depth0),(depth0 != null ? depth0.list : depth0),{"name":"selectedLists","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"button-link setting form-grid-child form-grid-child-quarter\"><span class=\"label\">Position</span><span class=\"value js-pos-value\"></span><label>Position</label><select class=\"js-select-position\">";
  stack1 = ((helper = (helper = helpers.ifCurrentList || (depth0 != null ? depth0.ifCurrentList : depth0)) != null ? helper : alias2),(options={"name":"ifCurrentList","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.ifCurrentList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</select></div></div><input class=\"primary wide js-commit-position\" type=\"submit\" value=\"Move\"></form></div>";
},"useData":true});

this["JST"]["moveList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Move List</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><form class=\"move-list-form\" action=\"/lists/move\" method=\"post\"><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-full\"><span class=\"label\">Position</span><span class=\"value js-pos-value\"></span><label>Position</label><select class=\"js-select-list-pos\">"
    + ((stack1 = (helpers.selectedPosition || (depth0 && depth0.selectedPosition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.lists : depth0),(depth0 != null ? depth0.list : depth0),{"name":"selectedPosition","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div></div><input class=\"primary wide js-commit-position\" type=\"submit\" value=\"Move\"></form></div>";
},"useData":true});

this["JST"]["notification"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"phenom mod-comment-type\"><div class=\"phenom-creator\"><div class=\"member js-show-mem-menu\" idmember=\"5960fe60783922c510c83ede\"><span class=\"member-gold-badge\" title=\"This member has Trello Gold.\"></span></div></div><div class=\"phenom-desc\"><span class=\"inline-member js-show-mem-menu\" idmember=\"5960fe60783922c510c83ede\"><span class=\"u-font-weight-bold\">User</span></span> on <a class=\"action-card\" data-id=\""
    + alias4(((helper = (helper = helpers.cardID || (depth0 != null ? depth0.cardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardID","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">"
    + alias4(((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card","hash":{},"data":data}) : helper)))
    + "</a><div class=\"comment-container\"><div class=\"action-comment markeddown js-comment is-truncated\" dir=\"auto\"><div class=\"current-comment js-friendly-links js-open-card\"><p>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p></div></div></div></div></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"phenom mod-other-type\"><div class=\"phenom-creator\"><div class=\"member js-show-mem-menu\" idmember=\"5960fe60783922c510c83ede\"><span class=\"member-gold-badge\" title=\"This member has Trello Gold.\"></span></div></div><div class=\"phenom-desc\"><span class=\"inline-member js-show-mem-menu\" idmember=\"5960fe60783922c510c83ede\"><span class=\"u-font-weight-bold\">User</span></span> "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " <a class=\"action-card\" data-id=\""
    + alias4(((helper = (helper = helpers.cardID || (depth0 != null ? depth0.cardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardID","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">"
    + alias4(((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card","hash":{},"data":data}) : helper)))
    + "</a></div></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.ifCommentType || (depth0 != null ? depth0.ifCommentType : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"ifCommentType","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.ifCommentType) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});

this["JST"]["notifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Notifications</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><ul class=\"notifications\"></ul></div>";
},"useData":true});

this["JST"]["popOver"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">List Actions</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><ul class=\"pop-over-list\"><li><a class=\"js-add-card\" href=\"#\">Add Card…</a></li><li><a class=\"js-move-list\" href=\"#\">Move List…</a></li><li><a class=\"highlight-icon js-archive\" href=\"#\">Archive</a></li></ul></div>";
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

this["JST"]["search"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over-header\"><span class=\"pop-header-title\">Search Results</span><a class=\"pop-close-btn\" href=\"#\"></a></div><div class=\"pop-over-content\"><ul class=\"search-cards\"></ul></div>";
},"useData":true});