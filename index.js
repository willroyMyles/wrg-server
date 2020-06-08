const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

let port = process.env.PORT || 8000

if (port) {
	app.listen(port)
	console.log("server started on port: " + port)
}

const controller = require("./Controller")
controller(app)
