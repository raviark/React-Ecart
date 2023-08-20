const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    // console.log(req);
    res.send('Api is running...')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    console.log(res);
    const note = notes.find((n)=> n._id === req.params.id)
    console.log(note);
    res.send(note);
})

app.listen(PORT, console.log(`node server started ${PORT}`));