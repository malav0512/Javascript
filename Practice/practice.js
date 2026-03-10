const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world!!");

});


app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Accessing route parameter
    res.send(`User ID: ${userId}`);
});

app.listen(port, () => {
    console.log("you are active");
})