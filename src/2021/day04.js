const utils = require('../util/fileUtil');

const firstStar = function (input) {
  let bingo = parseInput(input);
  return playFirstWin(bingo.bingoRow, bingo.boards);
}

const secondStar = function (input) {
  let bingo = parseInput(input);
  return playLastWin(bingo.bingoRow, bingo.boards);
}

const playFirstWin = (bingoRow, boards) => {
  for (let i = 0; i < bingoRow.length; i++) {
    let number = bingoRow[i];
    markDrawnNumer(number, boards);
    let winningBoard = getWinningBoard(boards);
    if (winningBoard.length === 1) {
      return calculateScore(number, winningBoard[0]);
    }
  }
}

const playLastWin = (bingoRow, boards) => {
  for (let i = 0; i < bingoRow.length; i++) {
    let number = bingoRow[i];
    markDrawnNumer(number, boards);

    let newBoards = removeWinningBoard(boards);
    if (boards.length === 1 && newBoards.length === 0) {
      return calculateScore(number, boards[0]);
    }

    boards = newBoards;
  }
}

const markDrawnNumer = (drawnNumber, boards) => {
  boards.forEach(board => {
    board.forEach(row => {
      row.forEach(col => {
        if (col.number === drawnNumber) {
          col.marked = true;
        }
      })
    })
  })
}

const getWinningBoard = (boards) => {
  return boards.filter(board => {

    for (let row = 0; row < board.length; row++) {
      if (board[row].filter(x => x.marked).length === 5) {
        return true;
      }

      let colMatch = true;
      for (let col = 0; col < board.length; col++) {
        if (board[col][row].marked === false) {
          colMatch = false;
          break;
        }
      }

      if (colMatch) {
        return true;
      }
    }

    return false;
  })
}

const removeWinningBoard = (boards) => {
  return boards.filter(board => {
    for (let row = 0; row < board.length; row++) {
      if (board[row].filter(x => x.marked).length === 5) {
        return false;
      }

      let colMatch = true;
      for (let col = 0; col < board.length; col++) {
        if (board[col][row].marked === false) {
          colMatch = false;
          break;
        }
      }

      if (colMatch) {
        return false;
      }
    }

    return true;
  });
}

const calculateScore = (number, board) => {
  let sum = board.flatMap(row => {
    return row.filter(col => !col.marked);
  }).map(col => col.number)
    .reduce((a, b) => a + b, 0);

  return number * sum;
}

const parseInput = (input) => {
  let bingoRow = input[0].split(',').map(x => parseInt(x));
  let boards = new Array();
  let board = new Array();
  let count = 0;
  for (let i = 2; i < input.length; i++) {
    if (input[i].trim() === '') {
      boards.push(board);
      board = new Array();
      count = 0;
    } else {
      let newRow = input[i].trim().split(/\s+/);
      board.push(newRow.map(x => {
        return {
          "number": parseInt(x),
          "marked": false
        }
      }));
    }
  }

  boards.push(board);

  return {
    bingoRow,
    boards
  }
}

exports.run = function () {
  let input = utils.getInput('2021', 'day04', '\n');
  console.log('Answer for first star', firstStar(input));
  console.log('Answer for second star', secondStar(input));
}

exports.runOne = firstStar;
exports.runTwo = secondStar;
