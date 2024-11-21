'use strict';
import {board} from './dom.js';


const createWhiteFigures = createMainFigureRow('w');
const createBlackFigures = createMainFigureRow('b');

for(let i = 0; i < 8; i++) board[0][i].appendChild(createBlackFigures());
for(let i = 0; i < 8; i++) board[1][i].appendChild(createPawn('b'));
for(let i = 0; i < 8; i++) board[6][i].appendChild(createPawn('w'));
for(let i = 0; i < 8; i++) board[7][i].appendChild(createWhiteFigures());


function createPawn(color){
  const pawn = document.createElement('img');
  pawn.classList.add('figure');
  
  if(color === 'w'){
    pawn.src = './assets/png/pawn_w.png';
    pawn.alt = 'White pawn';
  }
  if(color === 'b'){
    pawn.src = './assets/png/pawn_b.png';
    pawn.alt = 'Black pawn';
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
      alt: `${colorName} rook`
    },
    {
      src: `./assets/png/bishop_${color}.png`,
      alt: `${colorName} bishop`
    },
    {
      src: `./assets/png/knight_${color}.png`,
      alt: `${colorName} knight`
    },
    {
      src: `./assets/png/queen_${color}.png`,
      alt: `${colorName} queen`
    },
    {
      src: `./assets/png/king_${color}.png`,
      alt: `${colorName} king`
    },
    {
      src: `./assets/png/knight_${color}.png`,
      alt: `${colorName} knight`
    },
    {
      src: `./assets/png/bishop_${color}.png`,
      alt: `${colorName} bishop`
    },
    {
      src: `./assets/png/rook_${color}.png`,
      alt: `${colorName} rook`
    },
  ]

    return function createFigure(){
      const figure = document.createElement('img');
      figure.classList.add('figure');
      figure.src = figures[counter].src;
      figure.alt = figures[counter].alt;

      counter++;

      console.log(figure);

      return figure;
    }

}
