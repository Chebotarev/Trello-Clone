TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],

  className: "boards-index-item col-md-3",

  events: {
    "click .remove-board-btn": "removeBoard",
    "click .edit-board-btn": "editBoard"
  },

  initialize: function () {
    this.listenTo(this.model.lists(), "sync", this.render);
  },

  attributes: function () {
    return {
      "data-id": this.model.id
    }
  },

  editBoard: function (event) {
    event.stopPropagation();
    Backbone.history.navigate(
      "boards/" + this.model.id + "/edit",
      { trigger: true }
    );
  },

  removeBoard: function (event) {
    event.stopPropagation();
    this.model.destroy();
  },

  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    return this;
  }
});
