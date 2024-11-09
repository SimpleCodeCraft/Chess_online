'use strict';

const board = document.getElementsByClassName('board')[0];

console.log(board);

let oldSelectedElement;

board.onclick = function(event){
    let target = event.target; // где был клик?

    // if (target.tagName != 'TD') return; // не на TD? тогда не интересует

    if(oldSelectedElement) oldSelectedElement.style.backgroundColor = '#f5f5f5';

    console.log(target);

    target.style.backgroundColor = 'red';
    oldSelectedElement = target;
}


function highlight(td) {
    if (td.classList.high) { // убрать существующую подсветку, если есть
      selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // подсветить новый td
  }
  

 