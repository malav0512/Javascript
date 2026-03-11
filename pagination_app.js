require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();
const mysql = require("mysql2");
const port = 3000;

const RESULTS_PER_PAGE = 100;


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


const pool = mysql.createConnection({
    host: DB_HOST,      // your MySQL host
    user: DB_USER,           // your MySQL username
    password: DB_PASSWORD, // your MySQL password
    database: DB_DATABASE
});

//verification
pool.connect((err) => {
    if (err) {
        console.log("Database connection failed", err.stack);
    }
    else {
        console.log("Database connected successfully.");
    }
})


app.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const sort = req.query.sort || "id"; //default id is sorted 
    const order = req.query.order || "asc"; //default asc order is selected
    const allowedsort = ["id", "student_name", "city"];
    const allowedorder = ["desc", "asc"];
    if (!allowedsort.includes(sort)) sort = "id";
    if (!allowedorder.includes(order)) order = "asc";
    console.log(page);
    if (page > 100 || page < 1) {
        res.status(404).send("Page Not Found");
        return;
    }
    let offset = (page - 1) * RESULTS_PER_PAGE;
    // let limit = RESULTS_PER_PAGE;


    pool.query('SELECT COUNT(*) AS total FROM student', (err, rows) => {
        if (err) throw err;

        const totalResults = rows[0].total;
        const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);
        // if (order === "desc") {
        //     offset = totalPages - (page * RESULTS_PER_PAGE);
        //     if (offset < 0) {

        //         limit = RESULTS_PER_PAGE + offset;
        //         offset = 0;
        //     }
        // }

        pool.query(`SELECT * FROM student order by ${sort} ${order} LIMIT ? OFFSET ?`, [RESULTS_PER_PAGE, offset], (err, studentRows) => {

            if (err) throw err;
            res.render("pagination", {
                students: studentRows,
                currentPage: page,
                totalPages: totalPages,
                sort,
                order
            })
        });

    });

})

app.listen(port, () => {
    console.log(`port is active at http://localhost:${port}`)
});