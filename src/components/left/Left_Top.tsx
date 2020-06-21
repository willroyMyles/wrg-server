import React, {useState, useEffect} from "react"
import {Avatar, Row, Button, Tooltip, Col} from "antd"
import {observer} from "mobx-react"
import dataExchanger from "../../data_layer/DataExchange"
import {BsPlus, BsPlusCircleFill} from "react-icons/bs"
import dataProvider from "../../data_layer/DataProvider"
import {motion} from "framer-motion"
import Motioner from "../helpers/Motioner"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import {theme} from "../../Theme"
import Text from "antd/lib/typography/Text"
import Content_Create_Post from "../middle/content/Content_Create_Post"

const Left_Top = observer(() => {
	return (
		<Motioner>
			<Row
				onClick={() => eventEmitter.emit(eventStrings.homeSelected)}
				style={{marginTop: 5, cursor: "pointer", marginBottom: 10}}
				align="middle"
				justify="center">
				<div style={{borderRadius: 100}}>
					<Text>WRG-Autoparts</Text>
				</div>
			</Row>
			<Row>
				<Col>
					<Motioner>
						<Button
							onClick={() => {
								eventEmitter.emit(eventStrings.showDrawer)
								eventEmitter.emit(eventStrings.shouldSetNode, <Content_Create_Post />)
							}}
							style={{
								backgroundColor: theme.primary_color,
								boxShadow: theme.boxShadow,
								padding: 0,
								paddingLeft: 20,
								paddingRight: 20,
								color: theme.text_white,
								borderRadius: 4,
								border: "none",
							}}>
							<Row align="middle">
								<BsPlus />
								<div>Create new Post</div>
							</Row>
						</Button>
					</Motioner>
				</Col>
			</Row>
		</Motioner>
	)
})

export default Left_Top
