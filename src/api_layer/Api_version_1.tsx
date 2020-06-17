import axios from "axios"
import {stringify} from "querystring"
import {message, Row} from "antd"

const url = "http://localhost:8000/api/"
axios.defaults.headers = {
	"Content-Type": "application/x-www-form-urlencoded",
}
export const sendCreatePost = (data: any) => {
	return new Promise((resolve, reject) => {
		console.log("posting", data)
		axios
			.post(url + "post/create", stringify(data))
			.then((res) => {
				console.log(res)

				//display toast
				if (res) resolve(res)
			})
			.catch((err) => {
				console.log(err)
				reject(false)
			})
	})
}

export const register = (data: any) => {
	console.log(data)
	return new Promise((resolve, reject) => {
		axios
			.post(url + "signup", stringify(data))
			.then((res) => {
				console.log(res)
				if (res) resolve(res)
			})
			.catch((err) => {
				if (err) reject(err)
			})
	})
}
