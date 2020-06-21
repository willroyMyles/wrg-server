import React, {useState, useEffect} from "react"
import {Row, Tooltip, notification, Button, Avatar} from "antd"
import {BsHouse, BsBoxArrowInRight, BsBoxArrowInLeft, BsBoxArrowRight, BsBoxArrowLeft} from "react-icons/bs"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import Signup from "../middle/account/Signup"
import {observer} from "mobx-react"
import dataExchanger from "../../data_layer/DataExchange"
import dataProvider from "../../data_layer/DataProvider"
import Text from "antd/lib/typography/Text"
import {theme} from "../../Theme"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import Motioner from "../helpers/Motioner"

const Left_Bottom = observer(() => {
	const [trigger, setTrigger] = useState(false)
	const bp = useBreakpoint()

	const [name, setname] = useState("")

	useEffect(() => {
		setname(dataExchanger.username)
		const arr = dataExchanger.username.split(" ")

		arr.forEach((value, index) => {
			setname((previous) => previous + value.slice(0, 1))
		})
	}, [dataExchanger.username])

	useEffect(() => {
		setTrigger(!trigger)
	}, [dataExchanger.userId])

	if (!dataExchanger.isLoggedIn())
		return (
			<Row justify="start">
				<Tooltip placement="right" title="log in">
					<Row
						align="bottom"
						justify="space-between"
						onClick={() => {
							eventEmitter.emit(eventStrings.showDrawer)
							// eventEmitter.emit(eventStrings.shouldSetNode, <Signup />)
						}}>
						<BsBoxArrowInRight color={theme.text_light} size={22} />
						{!bp.xs && <Text style={{marginLeft: 10, color: theme.text_light}}>Log in</Text>}
					</Row>
				</Tooltip>
			</Row>
		)
	else
		return (
			<Motioner>
				<Row style={{marginTop: 15}} align="middle" justify="center">
					<Tooltip placement="right" title="Profile">
						<Avatar
							style={{color: "white", cursor: "pointer", backgroundColor: theme.primary_color, fontSize: ".9rem"}}
							size={42}>
							{name.toUpperCase()}
						</Avatar>
					</Tooltip>
				</Row>
			</Motioner>
		)
})

export const ConfirmButton = () => {
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
