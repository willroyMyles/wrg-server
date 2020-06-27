import React, {useState, createRef, useRef} from "react"
import Motioner from "../../helpers/Motioner"
import {Heading, TextParaGraph} from "../../helpers/Helpers_Index"
import {Input, Row, Button, List, Col} from "antd"
import {BsMusicNoteBeamed} from "react-icons/bs"
import {observer} from "mobx-react"
import chatManager from "../../../data_layer/ChatManager"

const FeedBack = observer(() => {
	const [data, setData] = useState<any[]>([])
	const [ref, setref] = useState<any>(null)
	const [value, setvalue] = useState("")

	const sendData = () => {
		const msg = ref.state.value
		ref.setState({value: ""})

		var obj: any = {}
		obj.sender = 1
		obj.text = msg

		data.push(obj)
		setvalue(msg)

		chatManager.sendMessage(obj)
	}

	return (
		<Motioner>
			<Row justify="space-between" style={{flexDirection: "column"}}>
				<Heading>Feedback</Heading>
				<Col flex="auto" style={{flexDirection: "column", flex: 1, height: "70vh"}}>
					<List
						header="Messages"
						dataSource={data}
						renderItem={(item, index) => {
							return (
								<Row justify={item.sender == 1 ? "start" : "end"}>
									<TextParaGraph>{item.text}</TextParaGraph>
								</Row>
							)
						}}
					/>
				</Col>
				<Row align="bottom" gutter={[10, 5]}>
					<Col span={19}>
						<Input
							ref={setref}
							placeholder="enter message here"
							// rows={2}
						/>
					</Col>
					<Col span={5}>
						<Button onClick={() => sendData()} type="primary">
							send
						</Button>
					</Col>
				</Row>
			</Row>
		</Motioner>
	)
})

export default FeedBack
