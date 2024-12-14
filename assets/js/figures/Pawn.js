'use strict';

import {board} from '../dom.js';

export default class Pawn{
    constructor(color){
        if(color !== 'White' && color !== 'Black') throw new Error('Pawn construcor error: Incorrect color specified. Available values: black and white')

        this.img = document.createElement('img');
        this.img.color = color;
        this.img.isSelected = false;

        if(color === 'White') this.img.src = '../../../assets/png/pawn_w.png';
        else this.img.src = '../../png/pawn_b.png';


        this.img.classList.add('figure');
        this.img.alt = `${color} pawn`;
    



        this.img.addEventListener('click', (event) =>{
            if(!this.img.isSelected){
                const pawnPosition = this.img.parentElement.axis;
                const checkLeftCell = { i: (pawnPosition.i - 1), j: (pawnPosition.j - 1) };
                const checkRightCell = { i: (pawnPosition.i - 1), j: (pawnPosition.j + 1) };
                
                if(board[checkLeftCell.i][checkLeftCell.j].children[0].color === 'Black'){
                    const hoverDiv = document.createElement('div');
                    hoverDiv.classList.add('hover');
           
                    const pawnClone = this.img.cloneNode(); 
                    pawnClone.classList.add('transparent');
            
                    hoverDiv.appendChild(pawnClone);

                    board[checkLeftCell.i][checkLeftCell.j].children[0].remove();
                    board[checkLeftCell.i][checkLeftCell.j].appendChild(hoverDiv);
        
                }
                if(board[checkRightCell.i][checkRightCell.j].children[0].color === 'Black'){

                }
            }
            if(this.isSelected){

            }


        });
    }


}

