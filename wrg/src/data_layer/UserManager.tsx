import {decorate, observable, action} from "mobx"
// import {observable} from 'mobx-react'

class Store {
	loggedIn = false
	userId = ""

	tempUsername = ""

	username = ""

	shouldLogIn = (values: any) => {
		return new Promise((resolve, reject) => {})
	}

	shouldSignup = (values: any) => {
		this.tempUsername = values.username

		return new Promise((resolve, reject) => {
			// signup(values)
			// 	.then((res) => {
			// 		this.username = this.tempUsername
			// 		this.tempUsername = ""
			// 		this.userId = res.data.insertedId
			// 		this.loggedIn = true
			// 		resolve(true)
			// 	})
			// 	.catch((err) => {
			// 		reject(err)
			// 	})
		})
	}
}

decorate(Store, {
	loggedIn: observable,
	userId: observable,
	tempUsername: observable,
	username: observable,
	shouldSignup: action,
})

const userManager = new Store()
export default userManager
