
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

const restartBtn = document.getElementById("restartBtn");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", ""];

let scores = {
    X: 0,
    O: 0
};

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Handle player moves
function handleCellClick(event) {

    const cell = event.target;
    const index = Number(cell.dataset.index);

    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.disabled = true;

    cell.style.color =
        currentPlayer === "X" ? "#00f5d4" : "#ffd166";

    checkWinner();
}

// Check winner
function checkWinner() {

    let winner = false;

    for (let condition of winningConditions) {

        const [a, b, c] = condition;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            winner = true;
            break;
        }
    }

    if (winner) {

        statusText.textContent =
            "🎉 Player " + currentPlayer + " Wins!";

        scores[currentPlayer]++;

        scoreX.textContent = scores.X;
        scoreO.textContent = scores.O;

        gameActive = false;

        return;
    }

    if (!board.includes("")) {

        statusText.textContent = "🤝 It's a Draw!";

        gameActive = false;

        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    statusText.textContent =
        "Player " + currentPlayer + "'s Turn";
}

// Restart current game
function restartGame() {

    board = ["", "", "", "", "", "", "", "", ""];

    currentPlayer = "X";
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = "";
        cell.disabled = false;
        cell.style.color = "white";
    });

    statusText.textContent = "Player X's Turn";
}

// Reset scores
function resetScore() {

    scores.X = 0;
    scores.O = 0;

    scoreX.textContent = 0;
    scoreO.textContent = 0;

    restartGame();
}

// Event listeners
cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);

resetBtn.addEventListener("click", resetScore);

