import React from "react"
import {observable, action} from "mobx"
import {sendMessage} from "../api_layer/Api_Chat_1"

class ChatManager {
	@observable data: Array<any> = []

	@action sendMessage = (payload: any) => {
		return new Promise((resolve, reject) => {
			sendMessage(payload)
		})
	}
}

const chatManager = new ChatManager()
export default chatManager
