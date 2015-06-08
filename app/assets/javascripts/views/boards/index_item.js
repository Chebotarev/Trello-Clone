TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],

  className: "boards-index-item col-md-3",

  events: {
    "click .remove-board-btn": "removeBoard"
  },

  attributes: function () {
    return {
      "data-id": this.model.id
    }
  },

  removeBoard: function (event) {
    debugger;
    console.log("Remove Board " + event.currentTarget);
  },

  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.append(content);
    return this;
  }
});
