//Require express
const express = require("express")
//Set 'express()' to a variable
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!")
})

//Set app to listen to port and include a console.log() to tell when server is running
app.listen(3000, () => {
  console.log("Listening to gitpub on port 3000...")
})