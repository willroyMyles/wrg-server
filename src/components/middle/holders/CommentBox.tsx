import React, {useState, useEffect} from "react"
import Motioner from "../../helpers/Motioner"
import {Row, Empty, Spin, message, Col} from "antd"
import {SubHeading, AAvatar} from "../../helpers/Helpers_Index"
import dataExchanger from "../../../data_layer/DataExchange"
import {Avatar} from "evergreen-ui"
import Paragraph from "antd/lib/typography/Paragraph"

const CommentBox = ({replies}: {replies: Array<string>}) => {
	const [loading, setLoading] = useState(true)
	const [data, setdata] = useState<any[]>()

	useEffect(() => {
		dataExchanger.getReplies(replies).then((res) => {
			setLoading(false)
			if (res) {
				const d: any[] = []
				replies.forEach((value, index) => {
					const val = dataExchanger.listOfReplies.get(value)
					d.push(val)
				})
				setdata(d)
			} else {
				message.error("could not get replies...")
			}
		})
	}, [])
	return (
		<Motioner style={{width: "100%", marginTop: 20}}>
			<Spin spinning={loading} delay={250}>
				{replies.length == 0 && (
					<Row>
						<Empty
							style={{width: "100%"}}
							description={
								<Row justify="center">
									<SubHeading>No comments as yet...</SubHeading>
								</Row>
							}
						/>
					</Row>
				)}
				{replies.length != 0 && (
					<Row>
						<SubHeading>Gonna show data, i promise</SubHeading>
						{data?.map((value, index) => {
							return (
								<Motioner style={{width: "100%"}}>
									<Row>
										<Col span={3}>
											<AAvatar item={{}} props={{size: 20}} />
										</Col>
										<Col span={21}>
											<Row>name time</Row>
											<Row>
												<Paragraph>{value.body}</Paragraph>
											</Row>
										</Col>
									</Row>
								</Motioner>
							)
						})}
					</Row>
				)}
			</Spin>
		</Motioner>
	)
}

export default CommentBox
