import React, {useState, useEffect} from "react"
import {Row, Tooltip, notification, Button, Col} from "antd"
import {
	BsHouse,
	BsBoxArrowInRight,
	BsBoxArrowInLeft,
	BsBoxArrowRight,
	BsBoxArrowLeft,
	BsSearch,
	BsPerson,
	BsGear,
} from "react-icons/bs"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import Signup from "../middle/account/Signup"
import {observer} from "mobx-react"
import dataExchanger from "../../data_layer/DataExchange"
import dataProvider from "../../data_layer/DataProvider"
import Text from "antd/lib/typography/Text"
import {theme} from "../../Theme"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import Motioner from "../helpers/Motioner"
import {Winput} from "../helpers/Styled"
import {SubHeading, SectionText} from "../helpers/Helpers_Index"
import {Avatar} from "evergreen-ui"

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

	return (
		<Row justify="start" style={{padding: 15, marginLeft: 15, border: "0px solid black"}}>
			<Col>
				{!dataExchanger.isLoggedIn() && (
					<Tooltip placement="right" title="Login / Register">
						<Button
							style={{border: "none", marginBottom: 20}}
							onClick={() => {
								eventEmitter.emit(eventStrings.showDrawer)
								eventEmitter.emit(eventStrings.shouldSetNode, <Signup />)
							}}
							type="text"
							icon={<BsPerson size={30} />}
							shape="round"
						/>
					</Tooltip>
				)}
				{dataExchanger.isLoggedIn() && (
					<Tooltip title="Profile" placement="right">
						<Motioner
							style={{
								border: "none",
								// backgroundColor: "rgba(255,255,255,.95)",
								// boxShadow: "0px 0px 5px rgba(0,0,0,.05)",
								padding: 0,
								borderRadius: 7,
								marginBottom: 10,
								width: "100%",
							}}>
							<Row
								align="middle"
								justify="space-between"
								onClick={() => eventEmitter.emit(eventStrings.settingsSelected)}>
								<Col>
									<Row>
										<Avatar
											isSolid
											style={{boxShadow: "0px 0px 15px rgba(0,0,0,.03)", marginTop: 2, marginBottom: 15}}
											size={45}
											name={dataExchanger.username}
											hashValue={theme.secondary_Color}
										/>
									</Row>
									<Row>
										<Text
											style={{
												textTransform: "capitalize",
												textShadow: "0px 0px 1px rgba(0,0,0,.3)",
												fontWeight: "bold",
												marginBottom: 3,
											}}>
											{dataExchanger.username}
										</Text>
									</Row>
									<Row>{bp.sm && <Text style={{fontSize: 12}}>Good Morning, </Text>}</Row>
									{/* <Row align="middle" justify="space-between" style={{marginTop: 7, margin: 5}}>
										<Col style={{cursor: "pointer", marginTop: 5}}>
											<BsGear size={20} />
										</Col>
										<Col>
											<BsBoxArrowLeft size={20} />
										</Col>
									</Row> */}
								</Col>
							</Row>
						</Motioner>
					</Tooltip>
				)}
			</Col>
		</Row>
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
