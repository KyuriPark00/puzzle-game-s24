console.log("Javascript is connected");

// Variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
const puzzlePieceDiv7 = document.querySelector(".puzzle-pieces");

const resetButton = document.getElementById("resetBut");
let draggedPiece;
let currentPuzzle = 0;


// Functions
function changeBGImage(event) {
    console.log("changeBGimage called");
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
    const puzzleId = event.currentTarget.id;

    const pieceNames = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    puzzlePieces.forEach((piece, index) => {
        piece.src = `./images/${pieceNames[index]}${puzzleId}.jpg`;
    });

    resetPieces();
}

// Start of dragging a puzzle piece
function handleStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

// Let piece to be dragged over drop zone
function handleOver(e) {
    e.preventDefault();
    console.log("Dragged Over");
}

// Drop the piece into drop zone
function handleDrop(e) {
    e.preventDefault();
    console.log("Dropped");
    // Crashing Bug: debugging to prevent multiple pieces from being dropped in the same place. If this drop zone already has a piece, additional pieces cannot be dropped here.
    if (this.children.length > 0) {
        console.log("Drop zone took placed");
        return;
    }

    this.appendChild(draggedPiece);
}

// Reset puzzle pieces to their original places
function reset() {
    console.log("User reset the puzzle.");
    puzzlePieces.forEach(piece => {
        puzzlePieceDiv7.appendChild(piece);
    });
}

function resetPieces() {
    puzzlePieces.forEach(piece => document.querySelector('.puzzle-pieces').appendChild(piece));
}

// Event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// Crashing Bug: added an event listener to the reset button so that when clicked, everything returns to its original state.
resetButton.addEventListener("click", reset);
resetButton.addEventListener('click', resetPieces);
