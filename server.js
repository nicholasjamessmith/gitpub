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
  //console.log(drinks)
  //Data is sent to the EJS file via the second argument of res.render
  res.render("index.ejs", { drinks })
})

app.get("/drinks/:id", (req, res) => {
  //res.send(req.params.id)
  res.render("show.ejs", {
    drink: drinks[req.params.id]
  })
  //console.log(req.params.id)
})

//Set app to listen to port and include a console.log() to tell when server is running
app.listen(3000, () => {
  console.log("Listening to gitpub on port 3000...")
})