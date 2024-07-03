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
   
    // Method 2 of changing puzzle using foreach loop and put back puzzle
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
    // Method 1 check is there any image before the first puzzle drop
    // if (this.children.length < 1) {
    // this.appendChild(dragPiece);
    //}
  
    //Method 2 check is there any image after the first puzzle drop

  

//eventListeners
theButtons.forEach(button => button.addEventListener('click',changeBGImage));