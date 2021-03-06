TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  className: "board-show",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addBoardList);
    this.listenTo(this.model.lists(), "sync", this.render);

    this.model.lists().each(function(list) {
      this.addBoardList(list);
    }.bind(this));
  },

  addBoardList: function (list) {
    var listSubview = new TrelloClone.Views.ListShow({
      model: list
    });
    this.addSubview('.list-show', listSubview);
  },

  setupDrag: function () {
    $('div.card-index').sortable();
    $('div.card-index').draggable();

    $('div.lists').droppable({
      drop: function (event, ui) {
        console.log("Dropped");
        debugger
      }
    });
  },

  render: function() {
    var content = this.template({
      board: this.model
    });

    this.$el.html(content);
    this.attachSubviews();
    this.setupDrag();
    return this;
  }

});
