
let container = document.getElementById("container");
container.innerText = "";
let active = 0;
let up = document.getElementById("score");
up.innerText = "0";
let score = 0;
let n = 2;
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createGrid(n) {

    container.innerHTML = "";
    let color = randomColor();
    let row = Math.floor(Math.random() * n);
    let column = Math.floor(Math.random() * n);
    let table = document.createElement("table");
    container.appendChild(table);
    table.setAttribute("id", "temp");
    if (!active) {
        document.getElementById("temp").style.pointerEvents = "none";

    }
    //    table.id = "temp";
    //document.getElementById("temp").style.pointerEvents = "auto";
    //document.getElementById("temp").style.pointerEvents = "auto";
    table.style.height = window.innerHeight;
    table.style.width = window.innerWidth;

    for (let i = 0; i < n; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            let td = document.createElement("td");

            td.style.backgroundColor = color;
            tr.appendChild(td);

            if (row === i && column === j) {

                up.innerText = score;
                score++;
                td.style.opacity = "0.5";

                td.addEventListener("click", () => {
                    return createGrid(n + 1);
                });
            }
            else {
                td.addEventListener("click", () => {

                    active = 0;
                    clearInterval(intervalId);
                    createGrid(2);
                    document.getElementById("end").innerText = "WRONG ONE!!"

                })
            }
        }
        table.appendChild(tr);
    }

}
let timeleft = 15;
let timer = document.getElementsByClassName("timer");
timer[0].innerText = timeleft;
let countdownTimer;

let intervalId;
function updateDisplay() {
    // Format the time as needed (e.g., minutes:seconds)
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
function startTimer() {
    active = 1;
    document.getElementById("temp").style.pointerEvents = "auto";
    intervalId = setInterval(countdown, 1000);
}

function countdown() {
    timeleft--;

    timer[0].innerText = timeleft;
    if (timeleft <= 0) {
        clearInterval(intervalId);
        timer[0].innerText = "GAME OVER";
        return;
    }
}

function pausebutton() {
    clearInterval(intervalId);
    console.log(document.getElementById("temp"));
    document.getElementById("temp").style.pointerEvents = "none";
    //stop the interval to run further

}

function reset() {
    window.location.replace("replica.html");

}
createGrid(2);

