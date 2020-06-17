import React, {useState, useEffect} from "react"
import {Row, Tooltip, notification, Button} from "antd"
import {BsHouse, BsBoxArrowInRight, BsBoxArrowInLeft, BsBoxArrowRight, BsBoxArrowLeft} from "react-icons/bs"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import Signup from "../middle/account/Signup"
import {observer} from "mobx-react"
import dataExchanger from "../../data_layer/DataExchange"
import dataProvider from "../../data_layer/DataProvider"

const Left_Bottom = observer(() => {
	const [trigger, setTrigger] = useState(false)

	useEffect(() => {
		setTrigger(!trigger)
	}, [dataExchanger.userId])

	if (!dataExchanger.isLoggedIn())
		return (
			<Row justify="center">
				<Tooltip placement="right" title="log in">
					<div
						onClick={() => {
							eventEmitter.emit(eventStrings.shouldMinimize, false)
							eventEmitter.emit(eventStrings.shouldSetNode, <Signup />)
						}}>
						<BsBoxArrowInRight size={22} strokeWidth={0.7} color="rgba(50,50,50,.8)" />
					</div>
				</Tooltip>
			</Row>
		)
	else
		return (
			<Row justify="center">
				<Tooltip placement="right" title="log out">
					<div
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
						<BsBoxArrowLeft size={25} strokeWidth={0.1} color="rgba(50,50,50,.8)" />
					</div>
				</Tooltip>
			</Row>
		)
})

const ConfirmButton = () => {
	return (
		<Button
			onClick={() => {
				notification.close("btn")
				eventEmitter.emit(eventStrings.logout)
			}}
			danger>
			log out
		</Button>
	)
}

export default Left_Bottom
