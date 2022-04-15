const express = require("express");
const app = express();
const port = 3000

app.set('view engine', 'hbs');

const path = require('path');

const  director= path.join(__dirname,"../public")
app.use(express.static(director));

const hbs = require('hbs');

const hF = path.join(__dirname,"../templates/partials");
hbs.registerPartials(hF);

const view = path.join(__dirname,"../templates/views");
app.set("views",view);

const news = require("../tools/newsapi");
const { error } = require("console");

app.get("/", (req, res) => {

    news((error, data) => {
        if (error) {
            return res.send(error);
        }
        else {
            res.render("index", {
                title: data,
                description: data,
                urlToImage: data,
                name: "Mariham",
            })
        }
    })
})

app.get("*", (req, res) => {

    res.render("error", {
        error: "The Page You Search For Not Found ",
        name: "Mariham"
    })
})

app.listen(port, () => {
    console.log("Server is running", port);
});