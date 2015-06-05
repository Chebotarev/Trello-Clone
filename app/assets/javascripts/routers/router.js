TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch();
  },

  routes: {
    "":  "index",
    "boards/new": "new"
  },

  index: function () {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  new: function () {
    var view = new TrelloClone.Views.BoardsForm();
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
