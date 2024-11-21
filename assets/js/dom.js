'use strict';

const tempBoard = [...(document.getElementById('board')).children];
const board = [[]];

for(let i = 0, count = 0; count < 64; i++){
  board[i] = [];
  for(let j = 0; j < 8; j++){
    board[i].push(tempBoard[count]);
    count++;
  }
}

export {board};

let oldSelectedElement;



