import React, {useState, useEffect, ReactNode} from "react"
import Motioner from "../../helpers/Motioner"
import {Popconfirm, Row, Button, Col, Card} from "antd"
import {SubHeading, Heading, SectionText, HintText} from "../../helpers/Helpers_Index"
import {Avatar} from "evergreen-ui"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import Text from "antd/lib/typography/Text"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import {observer} from "mobx-react"
import dataExchanger from "../../../data_layer/DataExchange"

const Profile_View_Other = observer(({item}: {item: any}) => {
	const bp = useBreakpoint()
	const [userData, setUserData] = useState<any>()
	const [loading, setloading] = useState(true)

	useEffect(() => {
		dataExchanger.getUserData(item.userId).then((res: any) => {
			if (res) {
				setUserData(res)
				setloading(false)
				console.log(res)
			} else {
				//tell them cant find data
				setloading(false)
			}
		})
	}, [])

	return (
		<Motioner style={{width: "100%"}}>
			<Row style={{marginTop: 35}}>
				<Heading>Profile</Heading>
			</Row>
			<Card loading={loading}>
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
				</Row>
				<Row justify="space-around" style={{margin: 35}}>
					<Col>
						<DescText text1={"posts"} text2={userData?.postCount} />
					</Col>
					<Col>
						<DescText text1={"fulfilled"} text2="0" />
					</Col>
				</Row>
				<Row justify="center">
					<Button
						onClick={() => {
							eventEmitter.emit(eventStrings.showDrawer, false)
						}}>
						close
					</Button>
				</Row>
			</Card>
		</Motioner>
	)
})

export const DescText = ({text1, text2}: {text1: ReactNode; text2: ReactNode}) => {
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
