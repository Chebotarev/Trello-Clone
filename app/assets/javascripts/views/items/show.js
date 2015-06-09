TrelloClone.Views.ItemShow = Backbone.View.extend({

  template: JST['items/show'],

  tagName: 'li',

  events: {
    "change .done-toggle": "toggleDone"
  },

  initialize: function() {
    this.listenTo(this.model, "sync add", this.render)
  },

  render: function() {
    var content = this.template({
      item: this.model
    });
    this.$el.html(content);
    return this;
  },

  toggleDone: function (event) {
    var newStatus = !this.model.get('done');
    this.model.set({ done: newStatus });
    this.model.save();
  }

});
