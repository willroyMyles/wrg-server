import React from "react"
import {Row, Col, Button} from "antd"
import RadioGroups from "../helpers/RadioGroups"
import Title from "antd/lib/typography/Title"
import {sideHistory} from "../helpers/Helpers_Index"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const Middle_Header = () => {
	const handleSelect = (name: string) => {
		sideHistory.push(`/${name}`)
	}
	const bp = useBreakpoint()

	return (
		<div>
			<Row align="middle" justify="space-between">
				<Col xs={0} md={8}>
					<span style={{color: "rgba(0,0,0,.6)", fontWeight: "bold", marginLeft: 15}}>WRG-Autoparts</span>
				</Col>
				<Col>
					<Row align="middle" justify="space-between">
						<RadioGroups onSelect={handleSelect} btns={["home", "category", "tba"]} />
					</Row>
				</Col>
				<div />
			</Row>
		</div>
	)
}

export default Middle_Header
