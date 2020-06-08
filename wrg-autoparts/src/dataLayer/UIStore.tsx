import {observable, autorun, action} from "mobx"
import dataProvider from "./DataStore"

class Store {
	@observable currentName = ""

	@observable viewSet = false

	@observable indexes = new Map().set(0, -1).set(1, -1)

	@observable breadCrumbs: Array<string> = []

	a = autorun(() => {
		this.currentName = dataProvider.headers[this.indexes.get(0)]
	})
}

const uiStore = new Store()
export default uiStore
