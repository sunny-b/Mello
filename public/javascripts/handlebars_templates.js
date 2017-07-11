this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"board-header\"><a href=\"#\" class=\"board-title-container\"><span class=\"board-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a><span class=\"private\">Private</span></div><div id=\"board\"><div class=\"board-canvas\"><ul id=\"lists\"></ul><div class=\"add-list idle\"><form method=\"post\" action=\"/lists\"><span class=\"placeholder open-add-list\">Add a list…</span><input class=\"list-name-input\" type=\"text\" name=\"title\" placeholder=\"Add a list…\" autocomplete=\"off\" dir=\"auto\" maxlength=\"512\"><div class=\"list-add-controls\"><input class=\"primary save-edit\" type=\"submit\" value=\"Save\"><a class=\"cancel-edit\" href=\"#\"></a></div></form></div></div></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-bar\"><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" value=\"\"><span class=\"search-icon\"></span></div><div class=\"logo\"></div><div class=\"info\"><a href=\"#\" class=\"box\" class=\"notifications\"><span class=\"notification-icon\"></span></a><div class=\"box user\"><span class=\"user-icon\"></span></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"list-header\"><textarea spellcheck=\"false\" dir=\"auto\" maxlength=\"512\" style=\"overflow: hidden; word-wrap: break-word; height: 24px;\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><a class=\"list-hamburger\" href=\"#\"><span class=\"list-icon\">...</span></a></div><a href=\"#\" class=\"open-card-composer\">Add a card...</a></div>";
},"useData":true});