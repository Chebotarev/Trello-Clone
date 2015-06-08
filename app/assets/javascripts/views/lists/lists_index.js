TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  template: JST['lists/show'],

  className: "lists col-md-3",

  initialize: function() {

  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
