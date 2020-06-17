import {observable, autorun} from "mobx"
import {ProcessList} from "./data"

class Store {
	@observable data = ProcessList()

	@observable headers: Array<string> = []

	@observable parts: Map<number, Array<string>> = new Map()

	t = autorun(() => {
		this.data.map((arr, index) => {
			this.headers.push(arr[0])
			this.parts.set(index, arr)
		})
		console.log(this.parts)
	})
}

const dataProvider = new Store()
export default dataProvider
