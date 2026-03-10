const express = require("express");
const querystring = require("querystring");
const url = require("url");

const app = express();

app.get('/', (req, res) => {
    const p = url.parse(req.query, true);
    console.log(p);
    res.send(p);
})

app.listen(3000, () => {
    console.log("you are active")
})
