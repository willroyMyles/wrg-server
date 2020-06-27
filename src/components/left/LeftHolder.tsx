import React from "react"
import PropTypes from "prop-types"
import Left_Top from "./Left_Top"
import Left_Middle from "./Left_Middle"
import Left_Bottom from "./Left_Bottom"
import {theme} from "../../Theme"
import {Row, Button} from "antd"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"

const LeftHolder = () => {
	const bp = useBreakpoint()
	return (
		<Row
			// align="middle"
			justify="space-between"
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				backgroundColor: theme.faint,
				border: "0px solid black",
				paddingTop: 5,
				paddingBottom: 5,
				// boxShadow: "7px 0px 10px rgba(100,100,100,.1)",
			}}>
			<Left_Bottom />
			<Left_Middle />
			<div />
			<div />
			<Button onClick={() => eventEmitter.emit(eventStrings.showFeedback)} type="primary">
				feedback
			</Button>
			{/* <Left_Top /> */}
		</Row>
	)
}

export default LeftHolder
