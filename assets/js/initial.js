'use strict';
import {board} from './dom.js';
import Pawn from './figures/Pawn.js';

const createWhiteFigures = createMainFigureRow('w');
const createBlackFigures = createMainFigureRow('b');

const pawn = new Pawn('White');
// console.log(pawn)
// // board[4][4] = pawn.img;
board[4][0].appendChild(createPawn('b'));
board[5][1].appendChild(pawn.img);
// console.dir(pawn)

for(let i = 0; i < 8; i++) board[0][i].appendChild(createBlackFigures());
for(let i = 0; i < 8; i++) board[1][i].appendChild(createPawn('b'));
for(let i = 0; i < 8; i++) board[6][i].appendChild(createPawn('w'));
for(let i = 0; i < 8; i++) board[7][i].appendChild(createWhiteFigures());


function createPawn(color){
  const pawn = document.createElement('img');
  pawn.classList.add('figure');
  pawn.isFigure = true;
  
  if(color === 'w'){
    pawn.src = './assets/png/pawn_w.png';
    pawn.alt = 'White pawn';
    pawn.color = 'White';
  }
  if(color === 'b'){
    pawn.src = './assets/png/pawn_b.png';
    pawn.alt = 'Black pawn';
    pawn.color = 'Black';
  }
  return pawn;
}

function createMainFigureRow(color){
  let counter = 0;
  let colorName;
  
  if(color !== 'w' && color !== 'b') throw new Error('Error: select the color in createMainFigureRow funcition');
  if(color === 'w') colorName = 'White';
  if(color === 'b') colorName = 'Black';

  const figures =[
    {
      src: `./assets/png/rook_${color}.png`,
      alt: `${colorName} rook`,
      color: `${colorName}`
    },
    {
      src: `./assets/png/bishop_${color}.png`,
      alt: `${colorName} bishop`,
      color: `${colorName}`
    },
    {
      src: `./assets/png/knight_${color}.png`,
      alt: `${colorName} knight`,
      color: `${colorName}`
    },
    {
      src: `./assets/png/queen_${color}.png`,
      alt: `${colorName} queen`,
      color: `${colorName}`
    },
    {
      src: `./assets/png/king_${color}.png`,
      alt: `${colorName} king`,
      color: `${colorName}`
    },
    {
      src: `./assets/png/knight_${color}.png`,
      alt: `${colorName} knight`,
      color: `${colorName}`
    },
    {
      src: `./assets/png/bishop_${color}.png`,
      alt: `${colorName} bishop`,
      color: `${colorName}`
    },
    {
      src: `./assets/png/rook_${color}.png`,
      alt: `${colorName} rook`,
      color: `${colorName}`
    },
  ]

    return function createFigure(){
      const figure = document.createElement('img');
      figure.classList.add('figure');
      figure.src = figures[counter].src;
      figure.alt = figures[counter].alt;
      figure.color = colorName;
      figure.isFigure = true;

      counter++;

      return figure;
    }

}
