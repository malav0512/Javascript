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
const totalpage = 100;

app.get('/', (req, res) => {
    let currentpage = parseInt(req.query.page) || 1;
    let startpage = (currentpage % 10) === 0 ? ((currentpage / 10) - 1) * 10 + 1 : Math.floor(currentpage / 10) * 10 + 1;
    let endpage = startpage + 9;

    res.render("pagination_two", {
        currentpage, startpage, endpage, totalpage
    });
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})