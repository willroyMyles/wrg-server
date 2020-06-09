module.exports = async (app) => {
	const mongoose = require("mongoose")
	mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
	const passport = require("passport")
	const session = require("express-session")
	const mongoStore = require("connect-mongo")(session)
	const LocalStrategy = require("passport-local").Strategy
	const {v4: uuid} = require("uuid")
	const Models = require("./models")
	const axios = require("axios")

	const {MongoClient} = require("mongodb")
	const client = new MongoClient(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
	await client.connect()

	const UserCollection = client.db(process.env.DATABASE_NAME).collection("users")

	app.use(
		session({
			secret: process.env.SECRET,
			resave: false,
			saveUninitialized: false,
			cookie: {
				httpOnly: false,
			},
			store: new mongoStore({mongooseConnection: mongoose.connection}),
		})
	)
	app.use(passport.initialize())
	app.use(passport.session())

	app.post("/api/signup", (req, response) => {
		const data = req.body

		UserCollection.findOne({username: req.body.username}, (err, res) => {
			if (res) return response.json("already exists")

			var user = {
				_id: uuid(),
				username: req.body.username,
				password: req.body.password,
				email: req.body.email,
				post: null,
			}

			UserCollection.insertOne(user, (error, results) => {
				if (error) {
					console.log("erroe", error)
				}
				console.log("user inserted", results.result)

				return response.json(results)
			})
		})
	})

	app.post(
		"/api/signup",
		passport.authenticate("ls", {
			successRedirect: "/ok",
		})
	)
	passport.use(
		"ls",
		new LocalStrategy((username, password, done) => {
			console.log("using local strategy")

			UserCollection.findOne({username: username}, (err, res) => {
				console.log(res)
				if (res) return done("already exist")

				var user = {
					_id: uuid(),
					username: username,
					password: password,
					post: null,
				}

				UserCollection.insertOne(user, (error, results) => {
					if (error) {
						console.log("erroe", error)
					}
					console.log("user inserted")
					done(null, results.insertedId)
				})
			})
		})
	)

	passport.serializeUser(function (userId, done) {
		done(null, userId)
	})

	passport.deserializeUser(function (id, done) {
		// User.findById(id, function (err, res) {
		// 	done(err, res)
		// })
		UserCollection.findOne({_id: id}, (err, res) => {
			done(err, res)
		})
	})
}
