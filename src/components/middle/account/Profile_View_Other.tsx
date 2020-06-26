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
import {CSSProperties} from "styled-components"

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
						<DescText title={"posts"} value={userData?.postCount} />
					</Col>
					<Col>
						<DescText title={"fulfilled"} value="0" />
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

export const DescText = ({
	title,
	value,
	valueStyle,
}: {
	title: ReactNode
	value: ReactNode
	valueStyle?: CSSProperties
}) => {
	return (
		<Motioner>
			<Row justify="center">
				<HintText textStyle={{textTransform: "capitalize"}}>{title}</HintText>
			</Row>
			<Row justify="center">
				<Text style={{fontWeight: "bold", opacity: 0.7}}>{value}</Text>
			</Row>
		</Motioner>
	)
}

export default Profile_View_Other
