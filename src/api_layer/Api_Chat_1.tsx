import axios, {AxiosRequestConfig} from "axios"
import {stringify} from "querystring"
import {message, Row} from "antd"
import moment from "moment"
import dotenv from "dotenv"

export const sendMessage = (payload: any) => {
	const url = "https://hooks.slack.com/services/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"
	const botUserToken = "xoxb-1222383793408-1209761931043-6dYvAz3klrDFtWECndeeUxMN"
	const feedbackId = "C016BEEPF52"
	return new Promise((resolve, reject) => {
		axios
			.post(url, payload)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	})
}
