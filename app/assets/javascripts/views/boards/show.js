TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  className: "board-show",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
    var content = this.template({
      board: this.model
    });

    this.$el.html(content);
    return this;
  }
});