TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/boards_index_item'],

  className: "boards-index-item col-md-4",

  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.append(content);
    return this;
  }
});
