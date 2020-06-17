import React from "react"
import PropTypes from "prop-types"
import Left_Top from "./Left_Top"
import Left_Middle from "./Left_Middle"
import Left_Bottom from "./Left_Bottom"

const LeftHolder = () => {
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "middle",
				padding: 15,
				backgroundColor: "white",
				border: "0px solid black",
				boxShadow: "4px 0px 10px rgba(100,100,100,.1)",
			}}>
			<Left_Top />
			<Left_Middle />
			<Left_Bottom />
		</div>
	)
}

export default LeftHolder
