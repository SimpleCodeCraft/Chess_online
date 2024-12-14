'use strict';

const divBoard = document.getElementById('board')
const tempBoard = [...(divBoard).children];
const board = [[]];

for(let i = 0, count = 0; count < 64; i++){
  board[i] = [];
  for(let j = 0; j < 8; j++){
    board[i].push(tempBoard[count]);
    board[i][j].axis = {
      i,
      j
    }
    
    count++;
  }
}

export {board, divBoard};


