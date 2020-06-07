import {observable, autorun} from "mobx"
import * as d3 from "d3"
import * as faker from "faker"

const ProcessList = () => {
	var parts = `Body Parts & Mirrors,Bumpers & Components,Fenders & Components,Grilles & Components,Hoods & Components,Mirrors & Components
Breakes Suspensions & Steering,Brake Discs  Pads & Calipers,Control Arms  Thrust Arms & Components,Lowering  Leveling & Lifting Kits,Shocks  Struts & Components,Wheel Hubs  Bearings  and Components
Engine & Drivetrain,Catalytic Converters & Components,Exhaust  Headers  Manifolds  Mufflers & Components,Fuel Systems & Components,Heating  Air Conditioning & Components,Radiators  Fans  Cooling Systems & Components
Exteriors & Accessories,Bumpers & Components,Car Covers,Fog Lights  Driving Lights  Components & Accessories,Grilles & Components,Hoods & Components,Switches  Relays  Wiring & Components
Headlight & Lighting,Fog Lights  Driving Lights  Components & Accessories,Headlights  Components & Accessories,Tail Lights  Back Up Lights & Accessories,Turn Signals  Side Markers & Other Lights
Interior Accessories,Carpet & Vinyl  Floor Kits,Dash & Dash Accessories,Floor Mats & Liners,Seats  Seat Covers & Accessories,Switches  Relays  Wiring & Components
Tools & Services,Code Readers  Scan Tools & Components,Garage Accessories,Mobile Electronics,Repair Manuals  Videos & Software,Tools
Misc`

	var arr = d3.csvParseRows(parts)
	return arr
}

const Tags = () => {
	return new Promise<any>((res, rej) => {
		var arr = []
		arr = d3.csvParse(`front end, back end, bumper, mirrors, doors, front panel, back panel, spoilers, rims, body kit`)
		res(arr)
	})
}

export interface RecordObject {
	title: string
	desc: string
	date: string
	name: string
	avatar: string
	comments: number
	status: number
}

export class RecordObject implements RecordObject {}

class DataStore {
	@observable data = ProcessList()

	@observable tags = []

	@observable headers: Array<string> = []

	@observable allParts: Map<number, Array<string>> = new Map([[-9, [""]]])

	@observable fakerData: Array<RecordObject> = []

	@observable loggedIn = false

	getFakerData = () => {
		return new Promise((resolve, reject) => {
			var arr = []
			for (let index = 0; index < 10; index++) {
				// const obj = {title: "", desc: "", date: "", name: "", avatar: "", comments: 0}
				const obj: RecordObject = new RecordObject()

				obj.title = faker.commerce.productName()
				obj.desc = faker.lorem.sentences(5)
				obj.date = faker.date.between(2018, "2020").toString()
				obj.name = faker.name.findName()
				obj.avatar = faker.image.avatar()
				obj.status = Math.floor(Math.random() * 3) + 1

				obj.comments = faker.random.number({min: 0, max: 10, precision: 2})
				arr.push(obj)
			}

			this.fakerData = this.fakerData.concat(arr)

			setTimeout(() => {
				resolve(true)
			}, 1500)
		})
	}

	test = autorun(() => {
		this.data.map((array, index) => {
			this.headers.push(array[0])
			this.allParts.set(index, array)
		})

		this.headers = this.headers.splice(1, this.headers.length - 1)

		Tags().then((res) => {
			this.tags = res["columns"]
		})
	})
}

const dataProvider = new DataStore()
export default dataProvider
