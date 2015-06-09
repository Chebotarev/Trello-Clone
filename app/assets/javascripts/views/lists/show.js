TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  template: JST['lists/show'],

  className: "lists col-md-3",

  initialize: function() {
    this.listenTo(this.model, "sync add", this.render);
    this.listenTo(this.model.cards(), "add", this.addCardSubview);
    this.listenTo(this.model.cards(), "sync", this.render);

    this.model.cards().each(function(card) {
      this.addCardSubview(card);
    }.bind(this));
  },

  addCardSubview: function (card) {
    var cardSubview = new TrelloClone.Views.CardShow({
      model: card
    });
    this.addSubview('.card-index', cardSubview);
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
