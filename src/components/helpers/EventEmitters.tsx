import {EventEmitter} from "events"

const eventEmitter = new EventEmitter()
export default eventEmitter

export const eventStrings = {
	homeSelected: "home selected",
	categoriesSelected: "categoriesSelected",
	category: "category",
	sub_category: "subCat",
	createPost: "createPost",
	login: "login",
	register: "login",
	shouldMinimize: "minimize",
	shouldSetNode: "set some nodes",
	logout: "log out",
}
