var router = new (Backbone.Router.extend({
  routes: {},
  index: function() {
    App.init();
  },
  initialize: function() { 
    this.route(/^\/?$/, "index", this.index);
  },  
}))();

Backbone.history.start({
  pushState: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true }); //changes url bar
});
