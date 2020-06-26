import React, {useState, useEffect} from "react"
import Motioner from "../../helpers/Motioner"
import {Row, Empty, Spin, message, Col} from "antd"
import {SubHeading, AAvatar, motionValues} from "../../helpers/Helpers_Index"
import dataExchanger from "../../../data_layer/DataExchange"
import {Avatar} from "evergreen-ui"
import Paragraph from "antd/lib/typography/Paragraph"
import {motion, AnimatePresence} from "framer-motion"
import Text from "antd/lib/typography/Text"

const CommentBox = ({replies}: {replies: Array<string>}) => {
	const [loading, setLoading] = useState(true)
	const [hovering, setHovering] = useState(false)
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
								<AnimatePresence exitBeforeEnter>
									<Motioner style={{width: "100%"}}>
										<Row>
											<Col span={3} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
												<AAvatar item={{}} props={{size: 20}} />
											</Col>
											<Col span={21}>
												<Row>
													{hovering && (
														<motion.div
															style={{width: "100%", color: "black"}}
															initial={motionValues.Scale_x}
															animate={motionValues.in}
															exit={motionValues.Scale_x}>
															<Text>name and time to go here</Text>
														</motion.div>
													)}
												</Row>
												<Row>
													<Paragraph>{value.body}</Paragraph>
												</Row>
											</Col>
										</Row>
									</Motioner>
								</AnimatePresence>
							)
						})}
					</Row>
				)}
			</Spin>
		</Motioner>
	)
}

export default CommentBox
