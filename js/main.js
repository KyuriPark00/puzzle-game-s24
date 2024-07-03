console.log("Javascript is connected")

//variables 
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board")

//functions
function changeBGImage(event) {
  console.log("changeBGImage called");
  //Method 1
  //console.log(this.id);
  //background-image: url('../images/backGround0.jpg');
  // puzzleBoard.style.backgroundImage = `url('../images/backGround${this.id}.jpg')`;
  // Method 1 of changing puzzle
  //puzzlePieces[0].src = `images/topLeft${event.currentTarget.id}.jpg`;
  //puzzlePieces[1].src = `images/topRight${event.currentTarget.id}.jpg`;
  //puzzlePieces[2].src = `images/bottomLeft${event.currentTarget.id}.jpg`;
  //puzzlePieces[3].src = `images/bottomRight${event.currentTarget.id}.jpg`;

  //Method 2
  console.log(event.currentTarget.id);
  puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg')`;

  //Change the puzzle pieces using a forEach loop, and make sure they are placed back into their original positions.
  const pos = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

  puzzlePieces.forEach((piece, index) => {
  piece.src = `images/${pos[index]}${event.currentTarget.id}.jpg`;
  puzzlePieceDiv.appendChild(piece);
  });
  
  
}

// 드롭 존에 이미지 있을 시 반환.
function dropped() {
    if (this.children.length >= 1) {
        return;
      }
      this.appendChild(dragPiece);
}

//eventListeners
theButtons.forEach(button => button.addEventListener("click",changeBGImage));