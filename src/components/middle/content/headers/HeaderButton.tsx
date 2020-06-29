import React from "react"
import Motioner from "../../../helpers/Motioner"
import {Row, Button, Affix} from "antd"
import eventEmitter, {eventStrings} from "../../../helpers/EventEmitters"
import {theme} from "../../../../Theme"

const HeaderButton = () => {
	return (
		<Motioner>
			<Row justify="end">
				<Affix offsetTop={35}>
					<Button
						style={{
							boxShadow: "0px 0px 15px rgba(100,100,100,.3)",
							// boxShadow: theme.boxShadow,
							border: "none",
							borderRadius: 7,
							textShadow: "0px 0px 1px rgba(0,0,0,.1)",
							fontWeight: "bold",
						}}
						onClick={() => {
							eventEmitter.emit(eventStrings.createPost)
						}}
						type="primary">
						Create Post
					</Button>
				</Affix>
			</Row>
		</Motioner>
	)
}

export default HeaderButton
