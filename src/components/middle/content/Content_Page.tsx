import React, {useState} from "react"
import {useParams} from "react-router-dom"
import {Row, Cascader} from "antd"
import dataProvider from "../../../data_layer/DataProvider"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import {CascaderValueType} from "antd/lib/cascader"

const Content_Page = () => {
	const {id, sub} = useParams()
	const [cat] = useState<string>(dataProvider.headers[Number.parseInt(id)])
	const subCat: string | undefined = dataProvider.data[Number.parseInt(id)][sub]
	const [] = useState(true)

	const options = [
		dataProvider.data.map((array, index) => {
			return {
				value: index,
				label: array[0],
				index: index,
				children: array.map((val, idx) => {
					if (idx == 0) return {value: idx, label: " all", index: idx}
					return {value: idx, label: val, index: idx}
				}),
			}
		}),
	]

	const handleChange = (items: CascaderValueType) => {
		eventEmitter.emit(eventStrings.sub_category, [items[0], items[1]])
	}

	return (
		<Row>
			<Row align="middle" justify="center" style={{width: "100%"}}>
				{/* <BackButton /> */}
				<Cascader
					onChange={(props) => {
						handleChange(props)
					}}
					options={options[0]}
					expandTrigger="click"
					defaultValue={[cat, subCat]}
					style={{
						width: "80%",
						backgroundColor: "transparent",
						border: "2px solid grey",
						fontWeight: "bold",
					}}
					displayRender={(label) => {
						return label.join(" • ")
					}}
				/>
			</Row>
		</Row>
	)
}

export default Content_Page
