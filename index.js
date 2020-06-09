const express = require("express")
const app = express()
const cors = require("cors")
const bp = require("body-parser")
require("dotenv").config()

app.use(cors())
app.use(bp.urlencoded({extended: true}))

let port = process.env.PORT || 8000

if (port) {
	app.listen(port)
	console.log("server started on port: " + port)
}

const controller = require("./Controller")(app)
const databse = require("./DatabaseController")(app)
