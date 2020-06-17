import React from "react"
import {Row, Col, Button} from "antd"
import RadioGroups from "../helpers/RadioGroups"
import Title from "antd/lib/typography/Title"
import {sideHistory} from "../helpers/Helpers_Index"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"

const Middle_Header = () => {
	const handleSelect = (name: string) => {
		localStorage.setItem("name", "willroy")
		sideHistory.push(`/${name}`)
	}

	return (
		<div>
			<Row align="middle" justify="space-between">
				<Col>
					<span style={{color: "rgba(0,0,0,.6)", fontWeight: "bold", marginLeft: 15}}>WRG-Autoparts</span>
				</Col>
				<Col>
					<Row align="middle" justify="space-between">
						<RadioGroups onSelect={handleSelect} btns={["home", "category", "tba"]} />
					</Row>
				</Col>
				<div />
				<Col>
					<Button
						onClick={() => {
							eventEmitter.emit(eventStrings.createPost)
						}}>
						new post
					</Button>
				</Col>
			</Row>
		</div>
	)
}

export default Middle_Header
