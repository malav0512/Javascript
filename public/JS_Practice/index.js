document.getElementById("click").addEventListener("click", function () {
    this.innerText = "Mouse clicked";
});

document.getElementById("mouseover").addEventListener("mouseover", function () {
    this.innerText = "Mouse is hovering";
})

document.getElementById("mouseout").addEventListener("mouseout", function () {
    this.innerText = "Mouse is out";
});

document.getElementById("dblclick").addEventListener("dblclick", function () {
    this.innerText = "Double clicked";
});

document.getElementById("mousedown").addEventListener("mousedown", function () {
    this.innerText = "Mouse is down";
});

document.getElementById("mouseup").addEventListener("mouseup", function () {
    this.innerText = "Mouse is up";
});

document.getElementById("mousemove").addEventListener("mousemove", function () {
    this.innerText = "Mouse is moving here";
});

document.getElementById("mouseenter").addEventListener("mouseenter", function () {
    this.innerText = "Mouse is entering";
    this.style.backgroundColor = "yellow";
});

document.getElementById("mouseenter").addEventListener("mouseleave", function () {
    this.innerText = "Mouse is leaving"
    this.style.backgroundColor = "green";
});

document.getElementById("contextmenu").addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("right click detected");

});

document.getElementById("wheel").addEventListener("wheel", function (event) {
    console.log("scrolling" + event.deltaY);
})

document.getElementById("drag").addEventListener("dragstart", function () {
    console.log("drag started");
});

document.getElementById("drag").addEventListener("dragend", function () {
    console.log("drag ended");
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domload").innerText = "HTML loaded!";
});

window.onload = function () {
    console.log("Full page loaded");
}

document.getElementById("handle").addEventListener("click", function () {
    this.innerText = "Event handled!!";
});

let element = document.getElementById("multiple_handle");
element.addEventListener("click", function () {
    alert("first event created");
});
element.addEventListener("click", function () {
    alert("second event created");
});

document.getElementById("name").addEventListener("keydown", function (event) {
    document.getElementById("demo").innerText = "key is pressed";
});

document.getElementById("name").addEventListener("keyup", function (event) {
    document.getElementById("demo").innerText = "key is released";
});