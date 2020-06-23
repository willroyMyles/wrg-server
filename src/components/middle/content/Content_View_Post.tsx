import React from "react"
import {Heading, HintText, TextParaGraph} from "../../helpers/Helpers_Index"
import {Row, Col, Button, Tooltip} from "antd"
import {BsXCircle} from "react-icons/bs"
import {Avatar} from "evergreen-ui"
import Paragraph from "antd/lib/typography/Paragraph"
import moment from "moment"
import {theme} from "../../../Theme"

export const Content_View_Post = ({item, onClick}: {item: any; onClick: () => void}) => {
	return (
		<div>
			<Row
				justify="space-between"
				style={{padding: 10, border: "1px solid rgba(200,200,200,.1)", borderLeft: "none", borderRight: "none"}}>
				<HintText>{item.make}</HintText>
				<HintText>{item.model}</HintText>
				<HintText>{item.category}</HintText>
				<HintText>{item.sub_category}</HintText>
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
				</Col>
			</Row>
			<Row justify="end">
				<Button type="primary" onClick={onClick}>
					Close
				</Button>
			</Row>
		</div>
	)
}

export default Content_View_Post
