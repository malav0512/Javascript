const express = require("express");
const path = require('path');
const app = express();
const mysql = require("mysql2");
const port = 3000;

const RESULTS_PER_PAGE = 100;


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// const users = [];
// for (let i = 1; i <= 50; i++) {
//     users.push(
//         {
//             user: i,
//             name: `User ${i}`,
//             email: `user${i}@gmail.com`
//         }
//     )
// };

const pool = mysql.createConnection({
    host: 'localhost',      // your MySQL host
    user: 'root',           // your MySQL username
    password: 'Dev@123', // your MySQL password
    database: 'student_table'
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

// app.get('/', (req, res) => {
//     // let page = parseInt(req.query.page) || 1;
//     // if (page < 1) {
//     //     page = 1;
//     // }
//     // const limit = 5;
//     // let offset = (page - 1) * limit;
//     // const startIndex = (page - 1) * limit;
//     // const endIndex = startIndex + limit;

//     // const paginatedUsers = users.slice(startIndex, endIndex);
//     // const totalPages = Math.ceil(users.length / limit);

//     // res.render("pagination", {
//     //     users: paginatedUsers,
//     //     currentPage: page,
//     //     totalPages: totalPages
//     // });

// });


app.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * RESULTS_PER_PAGE;
    pool.query('SELECT COUNT(*) AS total FROM student', (err, rows) => {
        if (err) throw err;
        console.log('Total rows:', rows[0].total);
        const totalResults = rows[0].total;
        const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

        pool.query(`SELECT id,student_name,city,contact_nob,date_of_birth,gender,address FROM student LIMIT ${offset},${RESULTS_PER_PAGE}`, (err, studentRows) => {
            if (err) throw err;
            res.render("pagination", {
                students: studentRows,
                currentPage: page,
                totalPages: totalPages
            })
        });

    });



})

app.listen(port, () => {
    console.log(`port is active at http://localhost:${port}`)
});