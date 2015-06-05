TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  template: JST['boards/index'],

  className: "container",

  initialize: function() {
    this.listenTo(this.collection, "add", this.addBoardSubview);
    this.listenTo(this.collection, "sync", this.render);

    this.collection.forEach(function(board) {
      // this.collection.getOrFetch(board.id);
      this.addBoardSubview(board);
    }.bind(this));
  },

  addBoardSubview: function(board) {
    var boardSubview = new TrelloClone.Views.BoardsIndexItem({
      model: board
    });
    this.addSubview('div.boards-index', boardSubview);
  },

  render: function() {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }

});
