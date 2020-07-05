const {response} = require("express")

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
	const PostCollection = client.db(process.env.DATABASE_NAME).collection("posts")
	const ReplyCollection = client.db(process.env.DATABASE_NAME).collection("replies")
	const CatCollection = client.db(process.env.DATABASE_NAME).collection("category_statistics")

	// app.use(
	// 	session({
	// 		secret: process.env.SECRET,
	// 		resave: false,
	// 		saveUninitialized: false,
	// 		cookie: {
	// 			httpOnly: false,
	// 		},
	// 		store: new mongoStore({mongooseConnection: mongoose.connection}),
	// 	})
	// )
	app.use(passport.initialize())
	app.use(passport.session())

	app.post("/api/login", (request, response) => {
		UserCollection.findOne({email: request.body.email, password: request.body.password}, (err, res) => {
			console.log(res)
			if (res) response.json({id: res._id, username: res.username})
			else response.json(false)
		})
	})

	app.post("/api/signup", (req, response) => {
		UserCollection.findOne({username: req.body.username}, (err, res) => {
			if (res) return response.json("already exists")

			var user = {
				_id: uuid(),
				username: req.body.username,
				password: req.body.password,
				email: req.body.email,
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

	app.post("/api/post/create", async (req, res) => {
		const post = new Models.Posts()
		post._id = uuid()
		post.title = req.body.title
		post.body = req.body.content
		post.time = new Date()
		post.model = req.body.model
		post.make = req.body.make
		post.category = req.body.category
		post.sub_category = req.body.sub_category
		post.replies = []
		post.year = req.body.year
		post.userId = req.body.userId
		var arr = await UserCollection.find({_id: post.userId})
			.toArray()
			.catch((err) => {
				res.json("no user")
			})
		post.username = arr[0].username

		PostCollection.insertOne(post).then((results) => {
			console.log(results)
			UserCollection.findOneAndUpdate({_id: post.userId}, {$push: {posts: results.insertedId}})
			res.json(post)
		})

		updateCategoryCollection(req.body.category)
	})

	app.post("/api/reply", (req, res) => {
		const {reply, id, username} = req.body

		var rep = {}
		rep._id = uuid()
		rep.body = reply
		rep.postId = id
		rep.username = username
		rep.date = new Date()

		ReplyCollection.insertOne(rep).then((result) => {
			PostCollection.findOneAndUpdate({_id: id}, {$push: {replies: rep._id}}).then((postResult) => {
				console.log(postResult)
			})
			res.json(true)
			return
		})
	})

	app.get("/api/reply", async (request, response) => {
		console.log(request.headers)

		const ids = request.headers.postid
		console.log(ids)
		// console.log(...ids)
		// console.log([...ids])

		PostCollection.findOne({_id: ids}).then((res) => {
			ReplyCollection.find({_id: {$in: res.replies}})
				.toArray()
				.then((res) => {
					console.log(res)
					response.json(res)
				})
		})
	})

	const updateCategoryCollection = (category, operand) => {
		CatCollection.find({_id: category}).toArray((err, res) => {
			var col = new Models.CategoryStatistics()

			if (res.length == 0) {
				col.total = 1
				col.available = 1
				col.filled = 0
				col.pending = 0
				col.viewed = 0
			} else {
				col.total = res[0].total + 1
				col.available = res[0].available + 1
			}

			if (res.length != 0) {
				col.total = operand ? operand.total : res[0].total + 1
				col.available = operand ? operand.available : res[0].available
				col.filled = operand ? operand.filled : res[0].filled
				col.pending = operand ? operand.pending : res[0].pending
				col.viewed = operand ? operand.viewed : res[0].viewed
				console.log(col)
			}

			CatCollection.updateOne(
				{_id: category},
				{
					$set: {
						total: col.total,
						available: col.available,
						filled: col.filled,
						pending: col.pending,
						viewed: col.viewed,
					},
				},
				{upsert: true}
			)
		})
	}

	app.get("/api/stats", (request, response) => {
		CatCollection.find().toArray((error, result) => {
			console.log(result)
			if (result) response.json(result)
			else response.json(false)
		})
	})

	app.get("/api/post", (req, response) => {
		// console.log(req.headers)

		PostCollection.find()
			.limit(Number.parseInt(req.headers.limit))
			.skip(Number.parseInt(req.headers.offset))
			.toArray((err, res) => {
				res.forEach((val, index) => {})
				response.json(res)
			})
	})

	app.get("/api/user", (request, response) => {
		const userId = request.headers.userid
		if (userId == null || userId == undefined) {
			console.log(request.headers)
			response.json(false)
			return
		}

		UserCollection.find({_id: userId})
			.toArray()
			.then((res) => {
				if (res.length == 0 || !res) {
					response.json("not found")
					return
				}

				if (res) {
					console.log(res[0])
					res[0].postCount = res[0].posts.length

					var obj = {}
					obj._id = res[0]._id
					obj.postCount = res[0].posts ? res[0].posts.length : 0
					response.json(obj)
				}
			})
	})
}
