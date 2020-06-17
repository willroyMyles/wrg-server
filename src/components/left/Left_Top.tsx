import React, {useState, useEffect} from "react"
import {Avatar, Row, Button, Tooltip} from "antd"
import {observer} from "mobx-react"
import dataExchanger from "../../data_layer/DataExchange"
import {BsPlus, BsPlusCircleFill} from "react-icons/bs"

const Left_Top = observer(() => {
	const arr = dataExchanger.username.split(" ")
	const [name, setname] = useState("")

	useEffect(() => {
		arr.forEach((value, index) => {
			setname((previous) => previous + value.slice(0, 1))
		})
	}, [])

	return (
		<div>
			{dataExchanger.isLoggedIn() && (
				<Row style={{marginTop: 15}} align="middle" justify="center">
					<Tooltip placement="right" title="Profile">
						<Avatar
							style={{color: "white", cursor: "pointer", backgroundColor: "rgba(100,100,190)", fontSize: ".9rem"}}
							size={42}>
							{name.toUpperCase()}
						</Avatar>
					</Tooltip>
				</Row>
			)}
			<Row style={{marginTop: 19}} align="middle" justify="center">
				<Tooltip placement="right" title="Create Post">
					<BsPlusCircleFill size={40} fill="rgba(100,100,200)" style={{cursor: "pointer"}} />
				</Tooltip>
			</Row>
		</div>
	)
})

export default Left_Top
