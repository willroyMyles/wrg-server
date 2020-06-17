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
