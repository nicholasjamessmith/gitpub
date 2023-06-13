//Require express
const express = require("express")
//Set 'express()' to a variable
const app = express()
//require database ('drinks' object)
const drinks = require("./models/drinks")

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
  //res.send(drinks);
  res.render("index.ejs")
})

//Set app to listen to port and include a console.log() to tell when server is running
app.listen(3000, () => {
  console.log("Listening to gitpub on port 3000...")
})