let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [5, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //player X
            box.innerText = "X";
            turnO = false;
        } else {
            //player O
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtns = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

const enableBtns = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
};


const showWinner = (Winner) => {
    msg.innerText = `Congratulations! Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
       let pos1Value = boxes[pattern[0]].innerText;
       let pos2Value = boxes[pattern[1]].innerText;
       let pos3Value = boxes[pattern[2]].innerText;

       if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
         if (pos1Value === pos2Value && pos2Value === pos3Value) {
             showWinner(pos1Value);
         }
       }
    }
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);