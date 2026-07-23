const express = require("express");

// instance of an 
// express.js application (creating a server using express process)

const app = express();


// request handler function

app.use("/hello", (req, res) => {
    res.send("Hello hello hello!")
});

app.use("/test", (req, res) => {
    res.send("Hello from the server!")
});

app.use("/", (req, res) => {
    res.send("Hello from the dashboard!")
});

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...")
});
// creating a web server on the port 7777, and the application is listening on that server.