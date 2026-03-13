
function validate() {
    let fname = document.getElementById("first_name").value.trim();
    let lname = document.getElementById("last_name").value.trim();
    let designation = document.getElementById("designation").value.trim();
    let email = document.getElementById("email").value;
    let add_one = document.getElementById("address_one").value.trim();
    let add_two = document.getElementById("address_two").value.trim();
    let phone = document.getElementById("phone").value;
    let radios = document.getElementsByClassName("gender");
    let check = false;
    let zipcode = document.getElementById("zip_code").value;
    let city = document.getElementById("city").value;
    let notice = document.getElementById("noticeperiod").value;
    let expectctc = document.getElementById("expect_ctc").value;


    // console.log(fname);

    // if (fname === "") {
    //     alert("please enter first name");
    //     // return;
    // }
    // if (lname.trim() === "") {
    //     alert("please enter last name");
    // }
    // if (designation.trim() === "") {
    //     alert("please enter designation");
    // }
    // let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (!pattern.test(email)) {
    //     console.log(email);
    //     alert("Please enter a proper email address.");
    // }
    // if (add_one === "") {
    //     alert("enter address-1");
    // }
    // if (add_two === "") {
    //     alert("enter address-2");
    // }
    // if (!/^\d{10}$/.test(phone)) {
    //     alert("pls enter phone-nob");
    // }
    // for (let radio of radios) {
    //     if (radio.checked) {
    //         check = true;
    //     }
    // }
    // if (!check) {
    //     alert("please enter gender");
    // }

    // if (!/^[1-9][0-9]{5}$/.test(zipcode)) {
    //     alert("please enter proper zipcode");
    // }
    // if (city.trim() === "") {
    //     alert("enter city name");
    // }
    // if (notice.trim() === "") {
    //     alert("enter notice period");
    // }
    // if (expectctc.trim() === "") {
    //     alert("Expected ctc not entered");
    // }

}
let rows = 1;

function add_edu_exp() {
    const course = document.getElementById("course").value.trim();
    const board = document.getElementById("board").value.trim();
    const pass_year = document.getElementById("passing_year").value.trim();
    const result = document.getElementById("result").value.trim();
    const tblbody = document.getElementById("edu_row");

    const rowhtml =
        `
    <tr id="edu_row_${rows}">
    <td><p>${course}</p></td>
    <td><p id="edu_board_${board}">${board}</p></td>
    <td><p id="edu_year_${pass_year}">${pass_year}</p></td>
    <td><p id="edu_result_${result}">${result}</p></td>
    <td><button type="button" onclick="del_edu_exp('edu_row_${rows}')">Delete</button></td>
    
    </tr>`;
    tblbody.innerHTML += rowhtml;
    rows++;

}

function del_edu_exp(uniqueId) {
    let row = document.getElementById(`${uniqueId}`);

    if (row) {
        row.remove();
    }

}
let rowId = 1;
function ref_add() {
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const relation = document.getElementById("relation").value.trim();
    const tbody = document.getElementById("reference_body");
    const rowhtml = `
        <tr id="row-${rowId}">
                    <td><p id="name-input-${rowId}">${name}</p></td>
                    <td> <p id="contact-input-${rowId}">${contact}</p></td>
                    <td ><p id="relation-input-${rowId}">${relation}</p></td>
                    <td><button type="button" onclick="ref_del('row-${rowId}')">Delete</button></td>
        </tr>
        
    `;
    tbody.innerHTML += rowhtml;
    rowId++;
}

function ref_del(rowUniqueId) {

    let row = document.getElementById(`${rowUniqueId}`);

    if (row) {
        row.remove();
    }

}

function add_work_exp() {
    let container = document.getElementById("container");

    let first = container.querySelector("#work_block");
    console.log(first)
    let clone = first.cloneNode(true);
    //clearing all the inputs
    let inputs = clone.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });
    container.appendChild(clone);
}

function del_work_exp() {
    let container = document.getElementById("container");
    let first = container.querySelectorAll("#work_block");
    console.log(first.length);
    if (first.length >= 1) {
        first[first.length - 1].remove();
    }
    else {
        alert("no experience to delete");
    }
}
let lang_row = 1
function add_lang() {
    const lang = document.getElementById("lang_container");
    const language = document.getElementById("language").value.trim();
    const add_lang = `
    <tr>
    <td><p>${language}</p></td>
    <td><input type="checkbox" id="read_${language}" name="speak_${language}">Read</td>
    <td><input type="checkbox" id="write_${language}" name="speak_${language}">Write</td>
    <td><input type="checkbox" id="speak_${language}" name="speak_${language}">Speak</td>
    </tr>
    `;
    lang.innerHTML += add_lang;
    lang_row++;
}

let tech_lang_row = 1
function add_tech_lang() {
    const lang_tech = document.getElementById("tech_lang_container");
    const tech = document.getElementById("tech").value.trim();
    const tr = document.createElement("tr");
    lang_tech.appendChild(tr);
    const add_lang = `
    
    <td><p id="${tech}">${tech}</p></td>
    <td><input type="radio" name="tech_id_${tech}">Beginner</td>
    <td><input type="radio"name="tech_id_${tech}">Intermediate</td>
    <td><input type="radio" name="tech_id_${tech}">Expert</td>

    `;
    tr.innerHTML = add_lang;
    tech_lang_row++;
}