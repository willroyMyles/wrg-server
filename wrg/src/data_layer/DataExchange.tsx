import {action, observable, autorun, computed} from "mobx"
import {
	sendCreatePost,
	register,
	login,
	getPosts,
	getStatictics,
	getUserData,
	sendReply,
	getReplies,
} from "../api_layer/Api_version_1"
import {localStorageStrings} from "../components/helpers/Helpers_Index"
import eventEmitter, {eventStrings} from "../components/helpers/EventEmitters"
import dataProvider from "./DataProvider"

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
	@observable userObject: any = {}

	@observable username = localStorage.getItem(localStorageStrings.user_name) || ""

	@observable postData: Array<any> = []
	@observable postOffset = 0

	@observable postLimit = 5
	@observable statictics: Map<number, any> = new Map()
	@observable currentOtherProfile: any = ""
	@observable listOfReplies: Map<string, any> = new Map()

	@action sendCreatePostData = (data: any) => {
		data.make = data.make_model[0]
		data.model = data.make_model[1]
		data.category = data.cat_sub[0]
		data.sub_category = data.cat_sub[1]
		data.userId = this.userId
		return new Promise((resolve) => {
			sendCreatePost(data)
				.then((res) => {
					this.postData.push(this.format(data))
					if (res) resolve(true)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}

	@action sendReply = (value: string, postId: string) => {
		return new Promise((resolve) => {
			sendReply(value, postId)
				.then((res) => {
					console.log(res)
					resolve(true)
				})
				.catch((err) => resolve(false))
		})
	}

	@action getReplies = (ids: Array<string>) => {
		return new Promise((resolve) => {
			if (this.listOfReplies.has(ids[0])) {
				resolve(true)
				return
			}

			getReplies(ids)
				.then((res: any) => {
					res.forEach((element: {_id: string; body: any}) => {
						this.listOfReplies.set(element._id, element)
					})

					resolve(true)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}

	format = (element: any) => {
		if (typeof element.make != typeof "") return
		if (typeof element.model != typeof "") return
		if (typeof element.category != typeof "") return
		if (typeof element.sub_category != typeof "") return
		element.model = dataProvider.carData[Number.parseInt(element.make)][Number.parseInt(element.model)]
		element.make = dataProvider.car_make[Number.parseInt(element.make)]
		element.sub_category = dataProvider.parts[Number.parseInt(element.category)][Number.parseInt(element.sub_category)]
		element.category = dataProvider.headers[Number.parseInt(element.category)]
		return element
	}

	@action getPosts = () => {
		return new Promise((resolve) => {
			getPosts(this.postOffset, this.postLimit)
				.then((res: any) => {
					if (res.length != 0) this.postOffset += this.postLimit
					res.forEach((element: any) => {
						element = this.format(element)
					})
					this.postData = this.postData.concat(res)
					if (res.length == 0) resolve(100)
					resolve(true)
				})
				.catch((err) => {
					console.log(err)
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
						this.userObject = res.data
						resolve(true)
					} else resolve(false)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}

	@observable isLoggedIn = () => this.userId != ""

	@action getStatictics = () => {
		return new Promise((resolve, reject) => {
			getStatictics()
				.then((res: any) => {
					res.forEach((element: any) => {
						this.statictics.set(Number.parseInt(element._id), element)
					})

					resolve(true)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}

	@action getUserData = (userId: string) => {
		return new Promise((resolve) => {
			if (userId == this.currentOtherProfile._id) {
				resolve(this.currentOtherProfile)
				return
			}

			getUserData(userId)
				.then((res: any) => {
					// resolve(true)
					this.currentOtherProfile = res
					resolve(res)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}
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
