console.log("Javascript is connected")

//variables 
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board")

//eventListeners
theButtons.forEach(button => button.addEventListener("click",changeBGImage));