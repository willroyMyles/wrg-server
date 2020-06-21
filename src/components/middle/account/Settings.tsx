import React from "react"
import Motioner from "../../helpers/Motioner"
import {Row, Button, notification} from "antd"
import {Heading, sideHistory} from "../../helpers/Helpers_Index"
import {ConfirmButton} from "../../left/Left_Bottom"

const Settings = () => {
	return (
		<Motioner>
			<Heading>Profile</Heading>
			<Row>
				<Button
					onClick={() => {
						notification.info({
							message: "Confirm log out?",
							placement: "bottomLeft",
							description: "Are you sure you wish to log out?",
							duration: 10,
							btn: <ConfirmButton />,
							key: "btn",
						})
					}}>
					Log out
				</Button>
			</Row>
			<Row>
				<Button
					onClick={() => {
						notification.info({
							message: "Confirm log out?",
							placement: "bottomLeft",
							description: "Are you sure you wish to log out?",
							duration: 10,
							btn: <Button onClick={() => sideHistory.go(0)}>Clear History</Button>,
							key: "btn",
						})
					}}>
					Clear History
				</Button>
			</Row>
		</Motioner>
	)
}

export default Settings
