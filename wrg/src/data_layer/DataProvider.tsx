import {observable, autorun} from "mobx"
import {ProcessList, Cars} from "./data"

class Store {
	@observable data = ProcessList()

	@observable headers: Array<string> = []

	@observable parts: Array<Array<string>> = []
	@observable carData = Cars()

	@observable car_make: Array<string> = []
	@observable car_model: Array<Array<string>> = []

	t = autorun(() => {
		this.data.map((arr, index) => {
			this.headers.push(arr[0])
			this.parts.push(arr)
		})
	})

	c = autorun(() => {
		this.carData.map((arr, index) => {
			this.car_make.push(arr[0])
			this.car_model.push(arr)
		})
	})
}

const dataProvider = new Store()
export default dataProvider
