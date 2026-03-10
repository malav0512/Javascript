// const itemsPerPage = 5; // how many items per page
// let currentPage = 1;
// import { data } from "../data.js";
// const itemsContainer = document.getElementById("items");
// const currentPageSpan = document.getElementById("current-page");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");

// function renderPage(page) {
//     // calculate start and end index
//     const start = (page - 1) * itemsPerPage;
//     const end = start + itemsPerPage;

//     // get subset of data
//     const pageData = data.slice(start, end);

//     // render items
//     itemsContainer.innerHTML = "";
//     pageData.forEach(item => {
//         const div = document.createElement("div");
//         div.textContent = `${item.id}: ${item.task}`;
//         itemsContainer.appendChild(div);
//     });

//     currentPageSpan.textContent = currentPage;

//     // disable buttons if at start or end
//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = end >= data.length;
// }

// // button events
// prevBtn.addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         renderPage(currentPage);
//     }
// });

// nextBtn.addEventListener("click", () => {
//     if (currentPage * itemsPerPage < data.length) {
//         currentPage++;
//         renderPage(currentPage);
//     }
// });

// // initial render
// renderPage(currentPage);