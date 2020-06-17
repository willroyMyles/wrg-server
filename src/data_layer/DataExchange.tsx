import {action, observable, autorun} from "mobx"
import {sendCreatePost, register} from "../api_layer/Api_version_1"
import {localStorageStrings} from "../components/helpers/Helpers_Index"

class Store {
	@observable loggedIn = false
	@observable loggedInString = ""
	@observable userId = localStorage.getItem(localStorageStrings.user_id) || ""

	@observable tempUsername = ""

	@observable username = localStorage.getItem(localStorageStrings.user_name) || ""

	@action sendCreatePostData = (data: any) => {
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
					this.username = this.tempUsername
					this.userId = res.data.insertedId
					this.loggedInString = "yes"
					if (res) resolve(true)
				})
				.catch((err) => {
					if (err) resolve(false)
				})
		})
	}

	@action isLoggedIn = () => this.userId != ""

	a = autorun((escape: any) => {
		if (this.username != "" && this.username != localStorage.getItem(localStorageStrings.user_name))
			localStorage.setItem(localStorageStrings.user_name, this.username)
		if (this.userId != "" && this.userId != localStorage.getItem(localStorageStrings.user_id))
			localStorage.setItem(localStorageStrings.user_id, this.userId)

		console.log(this.username, localStorage.getItem(localStorageStrings.user_name))
	})
}

const dataExchanger = new Store()
export default dataExchanger

//should consider using useSWR here to fetch and load data
