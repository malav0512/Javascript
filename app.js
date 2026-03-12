const express = require("express");
const path = require("path");
const app = express();

const port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/JS_Task_1', (req, res) => {
    res.render("JS_Task_1/replica");
});

app.get('/JS_Task_2', (req, res) => {
    res.render("JS_Task_2/task");
});

app.get('/JS_Task_3', (req, res) => {
    res.render("Form_task/form");
});

app.get('/JS_Task_4', (req, res) => {
    res.render("JS_Practice/index");
});

app.get('/', (req, res) => {
    res.render("main");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
