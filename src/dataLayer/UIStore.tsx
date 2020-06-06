import {observable, autorun, action} from "mobx"

class Store {
	@observable currentName = ""

	@observable viewSet = false

	@observable indexes = new Map().set(0, -1).set(1, -1)

	@observable breadCrumbs: Array<string> = []
}

const uiStore = new Store()
export default uiStore
