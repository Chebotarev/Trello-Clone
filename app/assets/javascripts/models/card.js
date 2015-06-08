TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: 'api/cards',

  parse: function (response) {
    if (response.items) {
      this.items().set(response.items);
      delete response.items;
    }
    return response;
  },

  items: function() {
    if (!this._items) {
      this._items = new TrelloClone.Collections.Items([], { card: this });
    }
    return this._items;
  }
});
