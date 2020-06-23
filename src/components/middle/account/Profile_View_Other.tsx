import React from "react"
import Motioner from "../../helpers/Motioner"
import {Popconfirm, Row, Button, Col} from "antd"
import {SubHeading, Heading, SectionText, HintText} from "../../helpers/Helpers_Index"
import {Avatar} from "evergreen-ui"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import Text from "antd/lib/typography/Text"

const Profile_View_Other = ({item}: {item: any}) => {
	return (
		<Motioner style={{width: "100%"}}>
			<Row style={{marginTop: 35}}>
				<Heading>Profile</Heading>
			</Row>
			<Row align="middle" justify="center">
				<Avatar size={55} name={item.username} />
			</Row>
			<Row style={{margin: 15}} align="middle" justify="center">
				<SectionText>{item.username}</SectionText>
			</Row>
			<Row align="middle" justify="space-around">
				<Button type="primary" disabled>
					send message?
				</Button>
				<Button
					onClick={() => {
						eventEmitter.emit(eventStrings.showDrawer, false)
					}}>
					close
				</Button>
			</Row>
			<Row justify="space-around" style={{margin: 35}}>
				<Col>
					<DescText text1={"posts"} text2="0" />
				</Col>
				<Col>
					<DescText text1={"fulfilled"} text2="0" />
				</Col>
			</Row>
		</Motioner>
	)
}

const DescText = ({text1, text2}: {text1: string; text2: string}) => {
	return (
		<Motioner>
			<Row justify="center">
				<HintText>{text1}</HintText>
			</Row>
			<Row justify="center">
				<Text>{text2}</Text>
			</Row>
		</Motioner>
	)
}

export default Profile_View_Other
