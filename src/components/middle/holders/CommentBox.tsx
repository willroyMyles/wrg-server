import React, {Component} from "react"
import Motioner from "../../helpers/Motioner"
import {Row, Empty, message, Col, List} from "antd"
import {TextSubHeading, TextHint, TextParaGraph} from "../../helpers/Helpers_Index"
import dataExchanger from "../../../data_layer/DataExchange"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import {Avatar} from "evergreen-ui"

class CommentBox extends Component<{postId: string; replies: any[]}> {
	state = {
		loading: false,
		hovering: false,
		data: [],
	}

	postId: string
	replies: any[]

	constructor(props: Readonly<{postId: string; replies: any[]}>) {
		super(props)

		this.postId = props.postId
		this.replies = props.replies
	}

	componentDidMount() {
		this.update()
		eventEmitter.addListener(eventStrings.replyCreated, () => {
			this.update()
		})
	}

	update = () => {
		dataExchanger.getReplies(this.postId).then((res: any) => {
			this.setState({loading: true})
			if (res) {
				this.setState({data: dataExchanger.listOfReplies.get(this.postId)})
			} else {
				message.error("could not get replies...")
			}
			this.setState({loading: false})
		})
	}

	render() {
		return (
			<Motioner style={{width: "100%", marginTop: 20}}>
				{this.state.data.length == 0 && (
					<Row>
						<Empty
							style={{width: "100%"}}
							description={
								<Row justify="center">
									<TextSubHeading>No comments as yet...</TextSubHeading>
								</Row>
							}
						/>
					</Row>
				)}
				{this.state.data.length != 0 && (
					<div>
						<Row>
							<TextHint>comments</TextHint>
						</Row>
						<Row style={{marginTop: 10}}>
							<List
								dataSource={this.state.data}
								loading={this.state.loading}
								renderItem={(item: any, index) => {
									// console.log(index, item)

									return (
										<List.Item key={index}>
											<Motioner>
												<Row>
													<Col>
														<Avatar name={item.username} />
														<TextHint>{item.name}</TextHint>
													</Col>
												</Row>
												<Row>
													<Col>
														<TextParaGraph>{item.body}</TextParaGraph>
													</Col>
												</Row>
											</Motioner>
										</List.Item>
									)
								}}
							/>
						</Row>
					</div>
				)}
			</Motioner>
		)
	}
}

export default CommentBox
