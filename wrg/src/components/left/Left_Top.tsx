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
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const Left_Top = observer(() => {
	const bp = useBreakpoint()
	const [visible, setVisible] = useState(false)
	return (
		<Motioner>
			<Row
				onClick={() => eventEmitter.emit(eventStrings.homeSelected)}
				style={{margin: 15, cursor: "pointer", marginBottom: 20, backgroundColor: "transparent"}}
				align="middle"
				justify="center">
				<Text
					style={{
						textShadow: "2px 5px 1px rgba(100,100,100,.2)",
						fontFamily: "Ariel",
						fontWeight: "bold",
						fontSize: "1.5rem",
					}}>
					Wrg_
				</Text>
			</Row>
			<Row align="middle" justify="center">
				<Motioner>
					<Tooltip placement="right" title="Create Post">
						<Button
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
							size="large"
							icon={<BsPlus size={25} strokeWidth={0.7} style={{marginTop: 2}} />}
							onClick={() => eventEmitter.emit(eventStrings.createPost)}
							style={{
								// padding: 10,
								// height: 20,
								// width: 20,
								border: "none",
								margin: 5,
								borderRadius: 100,
								backgroundColor: theme.primary_color,
								color: theme.text_white,
								boxShadow: theme.boxShadow,
							}}></Button>
					</Tooltip>
					{visible && (
						<Motioner>
							<Row justify="center">{/* <Text>Create New Post</Text> */}</Row>
						</Motioner>
					)}
				</Motioner>
			</Row>
		</Motioner>
	)
})

export default Left_Top
