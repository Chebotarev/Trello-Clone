TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],

  className: "boards-index-item col-md-4",

  attributes: function () {
    return {
      "data-id": this.model.id
    }
  },

  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.append(content);
    return this;
  }
});
