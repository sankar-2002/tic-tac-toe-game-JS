export default class GameView {

  constructor() {
    console.log("init GameView");
  }

  updateBoard(game) {
    
    console.log("This is a Board Within gameView");
    console.log(game.board);

    for(let i=0; i<game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      console.log(tile);
      tile.textContent = game.board[i];
    }

  }
}
