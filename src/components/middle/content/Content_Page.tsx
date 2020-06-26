import React, {useState} from "react"
import {useParams} from "react-router-dom"
import {Row, Cascader} from "antd"
import dataProvider from "../../../data_layer/DataProvider"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import {CascaderValueType} from "antd/lib/cascader"
import Content_List from "./Content_List"
import Motioner from "../../helpers/Motioner"
import Content_List_2 from "./Content_List_2"

const Content_Page = () => {
	const {id, sub} = useParams()
	const [cat] = useState<string>(dataProvider.headers[Number.parseInt(id)])
	const [subCat] = useState(dataProvider.data[Number.parseInt(id)][sub])
	const [count, setCount] = useState(0)
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
		setCount((prev) => prev + 1)
		eventEmitter.emit(eventStrings.sub_category, [items[0], items[1], count])
	}

	return (
		<Motioner>
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
			<Row>
				<Content_List_2 cat={id ? id : undefined} sub={sub ? sub : undefined} />
			</Row>
		</Motioner>
	)
}

export default Content_Page
