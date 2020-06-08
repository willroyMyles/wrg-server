module.exports = (app) => {
	const express = require("express")
	const path = require("path")

	app.use(express.static(path.join(__dirname, "wrg/build")))

	app.get("/api", (req, res) => {
		res.json("hi")
	})

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname + "/wrg/build/index.html"))
	})

	console.log("started")
}
