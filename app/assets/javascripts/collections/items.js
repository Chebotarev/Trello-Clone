TrelloClone.Collections.Items = Backbone.Collection.extend({
  url: 'api/items',
  model: TrelloClone.Models.Item,

  getOrFetch: function(id) {
    var item = this.get(id);

    if (!item) {
      item = new TrelloClone.Models.Item({ id: id });
      item.fetch({
        success: function() {
          this.add(item);
        }.bind(this)
      });
    } else {
      item.fetch();
    }

    return item;
  },
});
