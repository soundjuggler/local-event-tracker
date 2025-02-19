const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

//SERVE THER STATIC FILES IN PUBLIC AND SCRITS
app.use(express.static("public"));
app.use(express.static("scripts"));

// DEFAULT ROUT TO HOME PAGE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

//EVENT PAGE ROUT
app.get("/events", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "events.html"));
});

//ABOUT PAGE ROUT
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

//START SERVER COMMAND, PORT IS DEFINED ABOCVE SO ITS CHANGED ABOVE IT WILL CHANGE HERER
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
