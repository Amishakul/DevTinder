const express = require("express");

// instance of an 
// express.js application (creating a server using express process)

const app = express();


// request handler function, these all are routes

// app.use("/hello/2", (req, res) => {
//     res.send("Abracadarab!")
// });


// app.use("/hello", (req, res) => {
//     res.send("Hello hello hello!")
// });

app.use("/user", (req, res) => {
    res.send("HAHAHAHAHAAH")
}); // Because of this route other remanining routes below will never get a chance to execute

// This will only handle GET calls to /user
app.get("/user", (req, res) => {
    res.send({firstname: "Amisha", lastname: "Kulkarni"})
})

app.post("/user", (req, res) => {
    // saving data to DB
    res.send("Data sucessfully saved to the database!")

})

app.delete("/user", (req, res) => {
    res.send("Deleted sucessfully!")
})

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello from the server!")
});

// app.use("/", (req, res) => {
//     res.send("Hello from the dashboard!")
// });

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...")
});
// creating a web server on the port 7777, and the application is listening on that server.