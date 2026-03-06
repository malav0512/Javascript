// let yellow = [document.getElementById("north-yellow"), document.getElementById("east-yellow"), document.getElementById("south-yellow"), document.getElementById("west-yellow")];
// let green = [document.getElementById("north-green"), document.getElementById("east-green"), document.getElementById("south-green"), document.getElementById("west-green")];;
// let red = [document.getElementById("north-red"), document.getElementById("east-red"), document.getElementById("south-red"), document.getElementById("west-red")];;

// const order = [3, 2, 1, 0];
// function start() {
//     ops(0);
// }

// function ops(index) {

//     let i = order[index];
//     // Turn everything red first
//     for (let j = 0; j < 4; j++) {
//         red[j].style.opacity = "1";
//         yellow[j].style.opacity = "0.3";
//         green[j].style.opacity = "0.3";
//     }

//     // GREEN
//     red[i].style.opacity = "0.3";
//     green[i].style.opacity = "1";

//     setTimeout(() => {

//         // YELLOW
//         green[i].style.opacity = "0.3";
//         yellow[i].style.opacity = "1";

//         setTimeout(() => {

//             // RED again
//             yellow[i].style.opacity = "0.3";
//             red[i].style.opacity = "1";

//             // Next light
//             ops((i + 1) % i.length);

//         }, 2000);

//     }, 2000);
// }
let yellow = [
    document.getElementById("north-yellow"),
    document.getElementById("east-yellow"),
    document.getElementById("south-yellow"),
    document.getElementById("west-yellow")
];

let green = [
    document.getElementById("north-green"),
    document.getElementById("east-green"),
    document.getElementById("south-green"),
    document.getElementById("west-green")
];

let red = [
    document.getElementById("north-red"),
    document.getElementById("east-red"),
    document.getElementById("south-red"),
    document.getElementById("west-red")
];

// Order: [West, South, East, North]
const order = [0, 1, 2, 3];

function start() {
    ops(0); // Start at the first light in the order array (West)
}

function ops(index) {
    let i = order[index];

    // Turn everything red first
    for (let j = 0; j < 4; j++) {
        red[j].style.opacity = "1";
        yellow[j].style.opacity = "0.3";
        green[j].style.opacity = "0.3";
    }

    // GREEN light for the current direction
    red[i].style.opacity = "0.3";
    green[i].style.opacity = "1";

    setTimeout(() => {
        // YELLOW light for the current direction
        green[i].style.opacity = "0.3";
        yellow[i].style.opacity = "1";

        setTimeout(() => {
            // RED again for the current direction
            yellow[i].style.opacity = "0.3";
            red[i].style.opacity = "1";

            // Move to the next light in the custom order
            ops((index + 1) % order.length);

        }, 2000); // Yellow stays on for 2 seconds

    }, 2000); // Green stays on for 2 seconds
}