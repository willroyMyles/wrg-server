import axios from "axios"

export const sendMessage = (payload: any) => {
	const url = "https://hooks.slack.com/services/T016JB9PBC0/B01646ZGEJH/Tdas2upa3eIUEqFZfZKzQYi" + "V"
	const botUserToken = "xoxb-1222383793408-1209761931043-CdSces0VvjyV53LMZWQSzCHq"
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
