TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",
  model: TrelloClone.Models.Board,

  getOrFetch: function(id) {
    var board = this.get(id);

    if (!board) {
      board = new TrelloClone.Models.Board({ id: id });
      board.fetch({
        success: function() {
          this.add(board);
        }.bind(this)
      });
    } else {
      board.fetch();
    }

    return board;
  },

  getOrFetchList: function(boardId, listId) {
    var board = this.get(boardId);
    var list;

    if (board) {
      list = board.lists().getOrFetch(listId);
    } else {
      list = new TrelloClone.Models.List({ id: listId });
      list.fetch();
    }

    return list;
  }
});
