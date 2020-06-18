import axios from "axios"
import {stringify} from "querystring"
import {message, Row} from "antd"
import moment from "moment"

const url = "http://localhost:8000/api/"
axios.defaults.headers = {
	"Content-Type": "application/x-www-form-urlencoded",
}
export const sendCreatePost = (data: any) => {
	data.year = moment(data.year._d).format("YYYY")
	return new Promise((resolve, reject) => {
		console.log("posting", stringify(data))
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

export const login = (data: any) => {
	return new Promise((resolve, reject) => {
		axios
			.post(url + "login", stringify(data))
			.then((res) => {
				if (res) resolve(res)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
