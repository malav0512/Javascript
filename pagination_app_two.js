const express = require('express');
const path = require('path');
const app = express();
const mysql = require("mysql2");
const port = 4000;

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dev@123',
    database: 'student_table'
});

pool.connect((err) => {
    if (err) {
        console.log("Database connection failed", err.stack);
    }
    else {
        console.log("Database connected successfully.");
    }
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
const record_per_page = 100;

app.get('/', (req, res) => {
    if (parseInt(req.query.page) <= 0 || parseInt(req.query.page) > 100) {
        res.send("Page Not Found");
        return;
    }
    let currentpage = parseInt(req.query.page) || 1;

    let sort = req.query.sort || "id";
    let order = req.query.order || "asc";
    const sortarr = ["id", "student_name", "city"];
    const orderarr = ["asc", "desc"];
    if (!sortarr.includes(sort)) sort = "id";
    if (!orderarr.includes(order)) order = "asc";
    let startpage = (currentpage % 10) === 0 ? ((currentpage / 10) - 1) * 10 + 1 : Math.floor(currentpage / 10) * 10 + 1;
    let endpage = startpage + 9;

    pool.query("select count(*) as total from student", (err, rows) => {
        if (err) throw err;
        const totalresults = rows[0].total;
        const totalpage = Math.ceil(totalresults / record_per_page);
        let limit = record_per_page;
        let offset = (currentpage - 1) * record_per_page;
        pool.query(`select * from student order by ${sort} ${order} limit ? offset ?`, [limit, offset], (err, studentrows) => {
            if (err) throw err;

            res.render("pagination_two", {
                studentrows, currentpage, startpage, endpage, totalpage, sort, order
            });

        })
    })


})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})