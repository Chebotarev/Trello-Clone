TrelloClone.Views.BoardEdit = Backbone.View.extend({
  template: JST['boards/edit'],

  className: "container edit-form-container",

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    return this;
  }
});
