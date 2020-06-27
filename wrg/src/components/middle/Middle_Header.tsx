import React from "react"
import {Row, Col, Button, Input, Tooltip, notification} from "antd"
import RadioGroups from "../helpers/RadioGroups"
import Title from "antd/lib/typography/Title"
import {sideHistory, SubHeading} from "../helpers/Helpers_Index"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import {BsPlus, BsPerson, BsPersonBoundingBox, BsPersonFill, BsSearch} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import {useTheme} from "styled-components"
import {theme} from "../../Theme"
import Motioner from "../helpers/Motioner"
import {motion} from "framer-motion"
import Signup from "./account/Signup"
import dataExchanger from "../../data_layer/DataExchange"
import {observer} from "mobx-react"
import {Avatar} from "evergreen-ui"
import randomColor from "randomcolor"
import {ConfirmButton} from "../left/Left_Bottom"
import {Winput} from "../helpers/Styled"

const Middle_Header = observer(() => {
	const bp = useBreakpoint()
	const pad = bp.xs ? 10 : 35
	return (
		<Motioner
			style={{
				marginBottom: 35,
				backgroundColor: "transparent",
				padding: 10,
				paddingLeft: pad,
				paddingRight: pad,
				// boxShadow: "0px 2px 5px rgba(200,200,200, .3)",
			}}>
			<Row style={{}} align="middle" justify="space-around">
				<Col flex="auto">
					<Winput
						style={{marginRight: 10, border: "none", backgroundColor: "white"}}
						prefix={
							<BsSearch
								style={{
									marginRight: 10,
									border: "none",
									borderBottom: "1px solid lightGrey",
									backgroundColor: "transparent",
								}}
								size={12}
								opacity={0.6}
							/>
						}
						placeholder="Search"
					/>
				</Col>
				<Col span={2} />

				<Col>
					{/* {!dataExchanger.isLoggedIn() && (
						<Tooltip title="Login / Register">
							<Button
								style={{border: "none", marginBottom: 20}}
								onClick={() => {
									eventEmitter.emit(eventStrings.showDrawer)
									eventEmitter.emit(eventStrings.shouldSetNode, <Signup />)
								}}
								type="default"
								icon={<BsPerson size={20} />}
								shape="round"
							/>
						</Tooltip>
					)} */}
					{dataExchanger.isLoggedIn() && (
						<Tooltip title="Profile" placement="bottomLeft">
							<Button
								style={{
									border: "none",
									backgroundColor: "rgba(200,200,200,.00)",
									boxShadow: "0px 0px 5px rgba(0,0,0,.0)",
								}}
								onClick={() => eventEmitter.emit(eventStrings.settingsSelected)}>
								<Row align="middle" justify="space-between">
									<Col style={{marginLeft: 7}}>
										<SubHeading>Good Morning ,{dataExchanger.username}</SubHeading>
									</Col>
								</Row>
							</Button>
						</Tooltip>
					)}
				</Col>
			</Row>
			{/* <Row style={{opacity: 0.8, width: "100%", margin: 10}}>
				<hr style={{opacity: 0.3, width: "100%"}} />
			</Row>
			<Row align="middle" justify="space-between">
				<Col>
					<Motioner>
						<Button
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
			</Row> */}
		</Motioner>
	)
})

export default Middle_Header
