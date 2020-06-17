import {EventEmitter} from "events"

const eventEmitter = new EventEmitter()
export default eventEmitter

export const eventStrings = {
	homeSelected: "home selected",
	categoriesSelected: "categoriesSelected",
	category: "category",
	sub_category: "subCat",
	createPost: "createPost",
}
