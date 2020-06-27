const mongoose = require("mongoose")

class Posts {
	_id
	userId
	title
	body
	category
	sub_category
	make
	model
	year
	time

	replies = []
}

class CategoryStatistics {
	_id
	sub
	total
	viewed
	pending
	filled
	available
}

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
module.exports.CategoryStatistics = CategoryStatistics
