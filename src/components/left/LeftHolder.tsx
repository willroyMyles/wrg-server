import React from "react"
import PropTypes from "prop-types"
import Left_Top from "./Left_Top"
import Left_Middle from "./Left_Middle"
import Left_Bottom from "./Left_Bottom"
import {theme} from "../../Theme"
import {Row} from "antd"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const LeftHolder = () => {
	const bp = useBreakpoint()
	return (
		<Row
			align="middle"
			justify="center"
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				// justifyContent: "space-between",
				alignItems: "middle",
				padding: bp.xs ? 15 : 20,
				// paddingRight: 25,
				backgroundColor: theme.faint,
				border: "0px solid black",
				// boxShadow: "7px 0px 10px rgba(100,100,100,.1)",
			}}>
			<Left_Top />
			<Left_Middle />
			<div style={{flex: 1}} />
			<Left_Bottom />
		</Row>
	)
}

export default LeftHolder
