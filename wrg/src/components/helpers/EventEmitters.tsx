import {EventEmitter} from "events"

const eventEmitter = new EventEmitter()
export default eventEmitter

export const eventStrings = {
	homeSelected: "home selected",
	categoriesSelected: "categoriesSelected",
	settingsSelected: "settings selected",
	category: "category",
	sub_category: "subCat",
	createPost: "createPost",
	login: "login",
	register: "login",
	shouldMinimize: "minimize",
	shouldSetNode: "set some nodes",
	logout: "log out",
	showDrawer: "showDrawer",
	list_mounted: "list mounted",
	PostSelected: "post slected ",
	showOtherProfile: " other profile",
	showFeedback: "feedback",
}
