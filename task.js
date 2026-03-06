let dimension;
document.getElementById("start").addEventListener("click", function () {
    dimension = 2;
    createGrid();
})
function createGrid() {

    const container = document.getElementById("container");
    container.innerHTML = '';

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${dimension},80px)`;
    container.style.gap = "5px";
    const totalcells = dimension * dimension;
    const lightIndex = Math.floor(Math.random() * totalcells);
    const hue = 200;

    for (let i = 0; i < totalcells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (i === lightIndex) {
            cell.style.backgroundColor = `hsl(${hue},75%,80%)`;

            cell.addEventListener("click", () => {
                dimension++;
                createGrid();
            });
        }
        else {
            cell.style.backgroundColor = `hsl(${hue},75%,60%)`;
        }
        container.appendChild(cell);
    }

}

