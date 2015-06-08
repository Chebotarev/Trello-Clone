TrelloClone.Views.ItemShow = Backbone.View.extend({

  template: JST['items/show'],

  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model, "sync add", this.render)
  },

  render: function() {
    var content = this.template({
      item: this.model
    });
    this.$el.html(content);
    return this;
  }

});
