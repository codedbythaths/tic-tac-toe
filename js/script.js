// === Track the current player and the game board ===

let currentPlayer = "X";

let gameBoard = ["", "", "", "", "", "", "", "", ""];

// === Get all the DOM elements ===

const cells = document.querySelectorAll(".cell");

const resetButton = document.getElementById("reset-btn");

// === Add a click handler to every cell ===

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

// === Handle a cell beign clicked ===

function handleClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;
    if (gameBoard[index] !== "") return;
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;

    // Switch turns
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
};

// === Reset the board when the button is clicked ===

resetButton.addEventListener("click", () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];

    cells.forEach(cell => {
        cell.textContent = "";
    });

    currentPlayer = "X";
});