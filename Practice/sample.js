function createTable() {
    let rows = parseInt(document.getElementById("row").value);
    let columns = parseInt(document.getElementById("column").value);
    let container = document.getElementById("tableContainer");

    let tr = document.createElement("tr");
    tr.id = "row";
    let table = document.createElement("table");
    table.id = "tb"
    table.border = "1";
    table.style.borderCollapse = "collapse";

    table.appendChild(tr);
    for (let j = 0; j < columns; j++) {
        const th = document.createElement("th");
        th.innerText = `name ${j + 1}`;
        tr.appendChild(th);
    }
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");
            table.style.backgroundColor = "green";
            td.textContent = `Row ${i + 1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }

    container.appendChild(table);
}
function deleterows() {
    let table = document.getElementById("tb");
    const index = parseInt(document.getElementById("deleteRow").value) - 1;
    table.deleteRow(index);
}
function deletecolumns() {

    let tb = document.getElementById("tb");
    let row = tb.rows;
    const index = parseInt(document.getElementById("deleteColumn").value) - 1;
    for (let j = 0; j < row.length; j++) {
        row[j].deleteCell(index);
    }

}