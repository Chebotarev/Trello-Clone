TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
    this.collection.fetch();
  },

  routes: {
    "": "index",
    "boards/:id": "show"
  },

  index: function () {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  show: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({
      model: board
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
