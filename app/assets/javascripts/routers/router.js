TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    "": "index",
    "boards/:id/edit": "edit",
    "boards/:id": "show"
  },

  edit: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardEdit({
      model: board
    });
    this._swapView(view);
  },

  index: function () {
    this.collection.fetch();
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  show: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({
      collection: this.collection,
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
