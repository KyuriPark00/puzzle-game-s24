console.log("Javascript is connected")

//variables 
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board")

//functions
function changeBGImage(event) {
    //console.log("changeBGImage called");
    //Method 1
    //console.log(this.id);
    //background-image: url("../images/backGround0,jpg");
    puzzleBoard.style.backgroundImage = `url('../images/backGround${this.id}.jpg')`;

    //Method 2
    console.log(event.currentTarget.id);
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