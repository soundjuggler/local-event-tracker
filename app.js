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

//LOGIN ROUT
app.get("/logIn", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "logIn.html"));
});

//REQUEST ROUT
app.get("/request", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "request.html"));
});

// Add these to your existing app.js
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.get("/categories", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "categories.html"));
});

app.get("/events", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "events.html"));
});

app.get("/checkout", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "checkout.html"));
});

app.get("/history", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "history.html"));
});


//START SERVER COMMAND, PORT IS DEFINED ABOCVE SO ITS CHANGED ABOVE IT WILL CHANGE HERER
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
