import React, {useState} from "react"
import {Heading, HintText, TextParaGraph} from "../../helpers/Helpers_Index"
import {Row, Col, Button, Tooltip, Badge, Affix} from "antd"
import {BsXCircle} from "react-icons/bs"
import {Avatar} from "evergreen-ui"
import Paragraph from "antd/lib/typography/Paragraph"
import moment from "moment"
import {theme} from "../../../Theme"
import ReplyBox from "../holders/ReplyBox"
import CommentBox from "../holders/CommentBox"
import {blue, green, generate, grey} from "@ant-design/colors"
import randomColor from "randomcolor"
export const Content_View_Post = ({item, onClick}: {item: any; onClick: () => void}) => {
	const [showReplyBox, setShowReplyBox] = useState(false)
	const [showReplies, setShowReplies] = useState(false)
	const [ref, setRef] = useState<Row | null>(null)

	var col = randomColor({seed: item.username})

	return (
		<div id="ref">
			<Row
				ref={(e) => setRef(e)}
				justify="space-between"
				style={{padding: 10, border: "1px solid rgba(200,200,200,.1)", borderLeft: "none", borderRight: "none"}}>
				<HintText>{item.make}</HintText>
				<HintText>{item.model}</HintText>
				<HintText>{item.category}</HintText>
				<HintText>{item.sub_category}</HintText>
				<div
					style={{
						height: "40%",
						position: "absolute",
						top: "0%",
						left: -20,
						width: 3,
						backgroundColor: col,
					}}
				/>
			</Row>
			<Row style={{marginTop: 10}}>
				<Col span={3}>
					<Avatar name={item.username} size={45} style={{boxShadow: "0px 0px 5px rgba(100,100,100,.08)"}} />
				</Col>
				<Col span={20} offset={1}>
					<Row align="top" justify="space-between" style={{border: "0px solid black", padding: 0}}>
						<Heading>{item.title}</Heading>
					</Row>
					<HintText>
						<span>posted by - </span>
						<span>{item.username}</span>
					</HintText>
					<HintText>{moment(item.time).fromNow()}</HintText>
					<Row style={{marginTop: 13, marginBottom: 17}}>
						<TextParaGraph style={{color: theme.text_light}}>{item.body}</TextParaGraph>
					</Row>
					<Row gutter={[10, 10]}>
						<Col>
							<Button onClick={() => setShowReplies(!showReplies)} type="default" color="blue">
								show comments <Badge count={item.replies.length} style={{backgroundColor: grey[0], marginLeft: 4}} />
							</Button>
						</Col>
						<Col>
							<Button onClick={() => setShowReplyBox(!showReplyBox)} type="default" color="blue">
								reply
							</Button>
						</Col>
						<Col flex="auto" />
						<Affix
							offsetTop={20}
							// target={() => document.getElementById( "ref" )}
						>
							<Col>
								<Button type="primary" onClick={onClick}>
									Close
								</Button>
							</Col>
						</Affix>
					</Row>
				</Col>
			</Row>
			<Row justify="end"></Row>

			<Row>
				<Col md={3} />
				<Col md={21}>
					<Row style={{width: "100%"}}>
						{showReplyBox && <ReplyBox item={item} />}
						{showReplies && <CommentBox replies={item.replies} />}
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default Content_View_Post
