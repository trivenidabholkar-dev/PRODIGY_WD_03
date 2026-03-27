const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;
let board = ["","","","","","","","",""];

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell => {
cell.addEventListener("click", cellClick);
});

restartBtn.addEventListener("click", restartGame);

function cellClick(){

const index = this.dataset.index;

if(board[index] !== "" || !gameActive){
return;
}

board[index] = currentPlayer;
this.textContent = currentPlayer;

checkWinner();

}

function checkWinner(){

for(let pattern of winPatterns){

let a = pattern[0];
let b = pattern[1];
let c = pattern[2];

if(board[a] && board[a] === board[b] && board[a] === board[c]){

cells[a].classList.add("win");
cells[b].classList.add("win");
cells[c].classList.add("win");

statusText.textContent = "Player " + currentPlayer + " Wins!";
gameActive = false;
return;
}

}

if(!board.includes("")){
statusText.textContent = "Game Draw!";
gameActive = false;
return;
}

currentPlayer = currentPlayer === "X" ? "O" : "X";
statusText.textContent = "Player " + currentPlayer + " Turn";

}

function restartGame(){

board = ["","","","","","","","",""];
gameActive = true;
currentPlayer = "X";
statusText.textContent = "Player X Turn";

cells.forEach(cell => {
cell.textContent = "";
cell.classList.remove("win");
});

}