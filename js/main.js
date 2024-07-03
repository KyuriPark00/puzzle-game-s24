console.log('Javascript is connected')

//variables 
const theButtons = document.querySelectorAll('#buttonHolder img');
const puzzleBoard = document.querySelector('.puzzle-board');
const puzzlePieces = document.querySelectorAll('.puzzle-pieces img');
const dropZones = document.querySelectorAll('.drop-zone');
const puzzlePieceDiv = document.querySelector('.puzzle-pieces');
let dragPiece;


//function
function changeBGImage(event) {
    console.log('changeBGImage called');
   
    // Change the puzzle pieces using `forEach` loop, and make sure they are placed back to original positions.
    const pos = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
  
    puzzlePieces.forEach((piece, index) => {
      piece.src = `images/${pos[index]}${event.currentTarget.id}.jpg`;
      puzzlePieceDiv.appendChild(piece);
    });
  
    //Method 2
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg')`;
  }
  
  function handlestartDrag() {
    console.log('started dragging');
    dragPiece = this;
  }
  
  function handleOver(e) {
    console.log('dragging over dropZone');
    e.preventDefault();
  }
  
  function dropped() {
    
    if (this.children.length >= 1) {
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
dropZones.forEach((zone) => zone.addEventListener('drop', dropped));