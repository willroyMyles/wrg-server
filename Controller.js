module.exports = (app) => {
	const express = require("express")
	const path = require("path")

	app.use(express.static(path.join(__dirname, "wrg-autoparts/build")))

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname + "/wrg-autoparts/build/index.html"))
	})

	app.get("/api", (req, res) => {
		res.json("hi")
	})

	console.log("started")
}
