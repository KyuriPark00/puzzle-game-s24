console.log('Javascript is connected')

//variables 
const theButtons = document.querySelectorAll('#buttonHolder img');
const puzzleBoard = document.querySelector('.puzzle-board');
const puzzlePieces = document.querySelectorAll('.puzzle-pieces img');
const dropZones = document.querySelectorAll('.drop-zone');
const puzzlePieceDiv = document.querySelector('.puzzle-pieces');

const resetButton = document.getElementById("resetBut");
let draggedPiece;
let currentPuzzle = 0;

console.log(theButtons);
console.log(puzzleBoard);


//function

//changing background images and puzzle pieces
function changeBGImage(event) {
    console.log('changeBGImage called');
   
    //Change the puzzle pieces using `forEach` loop, and make sure they are placed back to original positions.
    const pos = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
  
    puzzlePieces.forEach((piece, index) => {
      piece.src = `images/${pos[index]}${event.currentTarget.id}.jpg`;
      puzzlePieceDiv.appendChild(piece);
    });

    resetPieces();
  
    //Method 2
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg')`;
  }
  
  //start of dragging a puzzle piece
  function handlestartDrag() {
    console.log('started dragging');
    dragPiece = this;
  }
  
  function handleOver(e) {
    console.log('dragged over to dropZone');
    e.preventDefault();
  }
  
  function dropped() {
    
    if (this.children.length >= 1) {
      console.log('Drop zone took placed');
      return;
    }
    this.appendChild(dragPiece);
  }
  

//eventListeners
theButtons.forEach((button) => button.addEventListener('click', changeBGImage));
puzzlePieces.forEach((piece) =>
  piece.addEventListener('dragstart', handlestartDrag)
);
dropZones.forEach((zone) => zone.addEventListener('dragover', handleOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

resetButton.addEventListener("click", reset);
resetButton.addEventListener('click', resetPieces);


//reset puzzle pieces to their original places
function reset() {
  console.log("User reset the puzzle.");
  puzzlePieces.forEach(piece => {
      puzzlePieceDiv7.appendChild(piece);
  });
}

function resetPieces() {
  puzzlePieces.forEach(piece => document.querySelector('.puzzle-pieces').appendChild(piece));
}
