window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new TrelloClone.Collections.Boards();

    var router = new TrelloClone.Routers.Router({
      collection: boards,
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};
