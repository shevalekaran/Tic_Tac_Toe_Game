var currentPlayer = "X";
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
var gameOver = false;

function makeMove(row, col) {
  if (gameOver || board[row][col] !== "") {
    return;
  }

  board[row][col] = currentPlayer;
  document.getElementById("board").children[row].children[col].innerText = currentPlayer;

  if (checkWin()) {
    document.getElementById("message").innerText = "Player " + currentPlayer + " wins!";
    gameOver = true;
  } else if (checkDraw()) {
    document.getElementById("message").innerText = "It's a draw!";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  // Check rows
  for (var i = 0; i < 3; i++) {
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer
    ) {
      return true;
    }
  }

  // Check columns
  for (var j = 0; j < 3; j++) {
    if (
      board[0][j] === currentPlayer &&
      board[1][j] === currentPlayer &&
      board[2][j] === currentPlayer
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    (board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer) ||
    (board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer)
  ) {
    return true;
  }

  return false;
}

function checkDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }

  return true;
}
