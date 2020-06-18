import {action, observable, autorun} from "mobx"
import {sendCreatePost, register, login} from "../api_layer/Api_version_1"
import {localStorageStrings} from "../components/helpers/Helpers_Index"
import eventEmitter, {eventStrings} from "../components/helpers/EventEmitters"

class Store {
	constructor() {
		eventEmitter.on(eventStrings.logout, () => {
			// localStorage.removeItem(localStorageStrings.user_id)
			// localStorage.removeItem(localStorageStrings.user_name)

			this.userId = ""
			this.username = ""
		})
	}
	@observable loggedInString = ""
	@observable userId = localStorage.getItem(localStorageStrings.user_id) || ""

	@observable tempUsername = ""

	@observable username = localStorage.getItem(localStorageStrings.user_name) || ""

	@action sendCreatePostData = (data: any) => {
		data.userId = this.userId
		return new Promise((resolve) => {
			sendCreatePost(data)
				.then((res) => {
					if (res) resolve(true)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}

	@action register = (data: any) => {
		this.tempUsername = data.username
		return new Promise((resolve) => {
			register(data)
				.then((res: any) => {
					if (res.data) {
						this.username = this.tempUsername
						this.userId = res.data.insertedId
						this.loggedInString = "yes"

						if (res) resolve(true)
					} else resolve(false)
				})
				.catch((err) => {
					if (err) resolve(false)
				})
		})
	}

	@action login = (data: any) => {
		return new Promise((resolve, reject) => {
			login(data)
				.then((res: any) => {
					if (res.data) {
						this.username = res.data.username
						this.userId = res.data.id
						resolve(true)
					} else resolve(false)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}

	@action isLoggedIn = () => this.userId != ""

	a = autorun((escape: any) => {
		if (this.username != localStorage.getItem(localStorageStrings.user_name))
			localStorage.setItem(localStorageStrings.user_name, this.username)
		if (this.userId != localStorage.getItem(localStorageStrings.user_id))
			localStorage.setItem(localStorageStrings.user_id, this.userId)

		console.log(this.username, localStorage.getItem(localStorageStrings.user_name))
	})
}

const dataExchanger = new Store()
export default dataExchanger

//should consider using useSWR here to fetch and load data
