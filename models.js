const mongoose = require("mongoose")

const Posts = mongoose.model("posts", {
	_id: Number,
	userId: Number,
	title: String,
	body: String,
	category: Number,
	sub_category: Number,
	make: String,
	model: String,
	year: Number,
	time: {type: Date, default: Date.now},

	replies: [],
})

const Replies = mongoose.model("replies", {
	_id: Number,
	postId: Number,
	userId: Number,
	body: String,
	time: {type: Date, default: Date.now},
})

const User = mongoose.model("user", {
	_id: Number,
	username: String,
	password: String,
	posts: [],
})

module.exports.User = User
module.exports.Posts = Posts
module.exports.Replies = Replies
