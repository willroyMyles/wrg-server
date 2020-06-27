import React from "react"
import Motioner from "../../helpers/Motioner"
import {Row, Button, notification, Space, Layout, Input, Col, Divider} from "antd"
import {Heading, sideHistory, HintText, SectionText, SubHeading, TextParaGraph} from "../../helpers/Helpers_Index"
import {ConfirmButton} from "../../left/Left_Bottom"
import {refreshStyles} from "less"
import Text from "antd/lib/typography/Text"
import {theme} from "../../../Theme"
import {Avatar} from "evergreen-ui"
import {observer} from "mobx-react"
import dataExchanger from "../../../data_layer/DataExchange"

const Settings = observer(() => {
	return (
		<Motioner>
			<Heading>Profile</Heading>

			<Row align="middle" justify="center" style={{flexDirection: "column"}}>
				<Avatar name={dataExchanger.username} size={75} style={{margin: 10}} />
				<Button>Update</Button>
			</Row>

			<Divider style={{borderColor: theme.text_extra_light, opacity: 0.4}} />
			<Row>
				<SectionText>User Name</SectionText>
			</Row>
			<Row justify="space-between">
				<Row align="top">
					<TextParaGraph>your user-name is</TextParaGraph>
					<SubHeading style={{marginTop: 3, marginLeft: 4}}> {dataExchanger.username}</SubHeading>
				</Row>
				<Button type="ghost">Change</Button>
			</Row>
			<Divider style={{borderColor: theme.text_extra_light, opacity: 0.4}} />

			<Row>
				<SectionText>Email Address</SectionText>
			</Row>
			<Row justify="space-between">
				<Row align="top">
					<TextParaGraph>your email adress is</TextParaGraph>
					<SubHeading style={{marginTop: 3, marginLeft: 4}}> emailaddress</SubHeading>
				</Row>
				<Button type="ghost">Change</Button>
			</Row>
			<Divider style={{borderColor: theme.text_extra_light, opacity: 0.4}} />

			<Row justify="space-between">
				<SectionText>Password</SectionText>
				<Button type="ghost">Change</Button>
			</Row>
			<Divider style={{borderColor: theme.text_extra_light, opacity: 0.4}} />

			<Row justify="space-between">
				<SectionText>Delete my account</SectionText>
				<Button type="ghost">Dalete Account</Button>
			</Row>
			<Divider style={{borderColor: theme.text_extra_light, opacity: 0.4}} />

			<Space size="middle">
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
				<Row>
					<Button onClick={() => {}}>change</Button>
				</Row>
			</Space>
		</Motioner>
	)
})

export default Settings
