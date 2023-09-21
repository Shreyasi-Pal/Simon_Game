let game = [];
let user = [];
let btns = ["red", "yellow", "green", "purple"];

let gameStart = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (gameStart == false) {
        console.log("game is started")
        gameStart = true;
        levelup();
    }
});

function levelup() {
    user = [];
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 3);
    let randomColor = btns[random];
    let randbtn = document.querySelector(`.${randomColor}`);
    // console.log(random);
    // console.log("randomColor =",randomColor);
    // console.log(randbtn);
    game.push(randomColor);
    console.log(game)
    gameFunc(randbtn);
};

function gameFunc(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function UserFunc(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function reset() {
    gameStart = false;
    game = [];
    user = [];
    level = 0;
}

function checkAns(idx) {
    // console.log(`current level ${level}`);
    // let idx = level - 1;
    if (user[idx] === game[idx]) {
        console.log("same value");
        if (user.length == game.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `game over ! Your score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundcolor = "white";
        }, 150);
        reset();
    }
}
function btnPress() {
    let btn = this;
    // console.log("btn :",btn);
    UserFunc(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    user.push(userColor);

     checkAns(user.length - 1);
    // checkAns();
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}