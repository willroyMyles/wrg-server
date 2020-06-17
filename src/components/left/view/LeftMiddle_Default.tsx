import React from "react"
import {Row, Tooltip} from "antd"
import {BsHouse, BsList} from "react-icons/bs"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"

const LeftMiddle_Default = () => {
	const iconSize = 20
	const mar = 20

	return (
		<div>
			<Row style={{marginTop: mar}}>
				<Tooltip title="Home">
					<div onClick={() => eventEmitter.emit(eventStrings.homeSelected)}>
						<BsHouse strokeWidth={0.5} size={iconSize} color="rgba(150,150,150,1)" />
					</div>
				</Tooltip>
			</Row>
			<Row style={{marginTop: mar}}>
				<Tooltip title="Categories">
					<div onClick={() => eventEmitter.emit(eventStrings.categoriesSelected)}>
						<BsList strokeWidth={0.5} size={iconSize} color="rgba(150,150,150,1)" />
					</div>
				</Tooltip>
			</Row>
		</div>
	)
}

export default LeftMiddle_Default
