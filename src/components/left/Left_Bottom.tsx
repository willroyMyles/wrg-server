import React from "react"
import {Row, Tooltip} from "antd"
import {BsHouse, BsBoxArrowInRight, BsBoxArrowInLeft} from "react-icons/bs"

const Left_Bottom = () => {
	return (
		<Row justify="center">
			<Tooltip title="log in">
				<div onClick={() => console.log("clicked")}>
					<BsBoxArrowInRight size={22} strokeWidth={0.7} color="rgba(150,150,150,.6)" />
				</div>
			</Tooltip>
		</Row>
	)
}

export default Left_Bottom
