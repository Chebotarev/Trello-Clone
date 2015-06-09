TrelloClone.Views.CardShow = Backbone.CompositeView.extend({

  template: JST['cards/show'],

  className: 'card-show',

  initialize: function () {
    this.listenTo(this.model, "sync add", this.render);
    this.listenTo(this.model.items(), "add", this.addItemSubview);
    this.listenTo(this.model.items(), "sync change", this.render);

    this.model.items().each(function(item) {
      this.addItemSubview(item);
    }.bind(this));
  },

  addItemSubview: function (item) {
    var itemSubview = new TrelloClone.Views.ItemShow({
      model: item
    });
    this.addSubview('.item-index-list', itemSubview);
  },

  render: function () {


    var content = this.template({
      card: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
