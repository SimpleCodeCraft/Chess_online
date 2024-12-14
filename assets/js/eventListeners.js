'use strict';
import { divBoard as board, board as cells } from "./dom.js";

let isWhiteMove = true;     // Чей ход
let isSelected = false;     // флажёк выделена ли фигура
let selectedFigure = null;      // Выбранный элемент

// board.addEventListener('click', function(event){
//     const figure = event.target;
//     const cell = figure.parentElement;

//     if(figure.isFigure){
//         if(figure === selectedFigure){
//             selectedFigure = null;

//         }

//         if(isWhiteMove && figure.color === 'White' || !isWhiteMove && figure.color === 'Black'){

//         }
//     }
    
//     return;
// })

function moves(figure){
    if(!figure.isFigure) throw new TypeError('Function moves argument is not figure');
    const axis = figure.parentElement.axis;
    
    
}

// board.addEventListener('click', function(event){
//     const elem = event.target;    

//     if(!isSelected && elem.isFigure){

//         const axis = event.target.parentElement.axis;
//         selectedEl = elem;
//         // isSelected = true;
//         // const i = axis.i;
//         // const j = axis.j;
    
//         console.log(elem);
    
//         if(elem.alt === 'White pawn'){
            // const hoverDiv = document.createElement('div');
            // hoverDiv.classList.add('hover');
   
            // const pawnClone = elem.cloneNode(); 
            // pawnClone.classList.add('transparent');
    
            // hoverDiv.appendChild(pawnClone);
    
//             hoverEl = hoverDiv;
//             cells[(axis.i - 1)][axis.j].appendChild(hoverDiv);
//         }
    

//     }
    
// })

// board.addEventListener('click', function(event){
//     const elem = event.target;
//     if(isSelected){
//         if(elem === selectedEl ){
//             hoverEl.remove();
//             selectedEl = null;
//         }
//     }

// })


