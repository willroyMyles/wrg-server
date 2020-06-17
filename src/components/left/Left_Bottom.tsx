import React from "react"
import {Row, Tooltip} from "antd"
import {BsHouse, BsBoxArrowInRight, BsBoxArrowInLeft, BsBoxArrowRight} from "react-icons/bs"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import Signup from "../middle/account/Signup"
import {observer} from "mobx-react"
import dataExchanger from "../../data_layer/DataExchange"

const Left_Bottom = observer(() => {
	if (dataExchanger.isLoggedIn())
		return (
			<Row justify="center">
				<Tooltip title="log in">
					<div
						onClick={() => {
							eventEmitter.emit(eventStrings.shouldMinimize, false)
							eventEmitter.emit(eventStrings.shouldSetNode, <Signup />)
						}}>
						<BsBoxArrowInRight size={22} strokeWidth={0.7} color="rgba(150,150,150,.6)" />
					</div>
				</Tooltip>
			</Row>
		)
	else
		return (
			<Row justify="center">
				<Tooltip title="log out">
					<div
						onClick={() => {
							// eventEmitter.emit(eventStrings.shouldMinimize, false)
							// eventEmitter.emit(eventStrings.shouldSetNode, <Signup />)
						}}>
						<BsBoxArrowRight size={22} strokeWidth={0.7} color="rgba(150,150,150,.6)" />
					</div>
				</Tooltip>
			</Row>
		)
})

export default Left_Bottom
