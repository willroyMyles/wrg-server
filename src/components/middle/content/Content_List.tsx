import React, {Component, PureComponent} from "react"
import PropTypes from "prop-types"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import Motioner from "../../helpers/Motioner"
import {Row, List, Col, Button, Tooltip} from "antd"
import {observer} from "mobx-react"
import dataExchanger from "../../../data_layer/DataExchange"
import Text from "antd/lib/typography/Text"
import {SubHeading, HintText, TextParaGraph, AAvatar} from "../../helpers/Helpers_Index"
import moment from "moment"
import {theme} from "../../../Theme"
import Paragraph from "antd/lib/typography/Paragraph"
import {blue} from "@ant-design/colors"
import {Avatar} from "evergreen-ui"
import randomColor from "randomcolor"
import Content_View_Post from "./Content_View_Post"
import {BsThreeDotsVertical, BsArrowBarRight, BsArrowRight} from "react-icons/bs"

interface IProps {
	cat: string
	sub: string
}

@observer
export default class Content_List extends PureComponent<IProps, any> {
	static propTypes = {
		cat: PropTypes.number,
		sub: PropTypes.number,
	}

	state = {
		data: dataExchanger.postData,
		category: null,
		sub_category: null,
		visible: false,
		currentIndex: null,

		morePosts: true,
		loading: false,
	}

	componentDidMount() {
		eventEmitter.emit(eventStrings.list_mounted, true)
		this.getMorePosts()
		if (this.props.cat) this.setState({category: Number.parseInt(this.props.cat)})
		if (this.props.sub) this.setState({sub_category: Number.parseInt(this.props.sub)})
		// data = dataExchanger
	}

	getMorePosts = () => {
		this.setState({loading: true})
		dataExchanger.getPosts().then((res) => {
			if (res) {
				if (res == 100) {
					this.setState({morePosts: false, loading: false})
					this.forceUpdate()

					return
				}
				this.setState({data: dataExchanger.postData})
			} else {
				this.setState({loading: false})
			}
		})
	}

	componentWillUnmount() {
		eventEmitter.emit(eventStrings.list_mounted, false)
	}

	render() {
		return (
			<Row>
				{this.state.data?.map((item: any, index: number) => {
					var col = randomColor({seed: item.username})
					return (
						<Motioner
							style={{width: "100%", marginTop: 29, backgroundColor: theme.text_white, padding: 20, borderRadius: 4}}>
							{this.state.currentIndex != index && (
								<Row
									style={{width: "100%"}}
									onClick={() => {
										// eventEmitter.emit(eventStrings.PostSelected, item)
									}}>
									<Col span={3}>
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
										<AAvatar item={item} />
									</Col>
									<Col span={20} offset={1}>
										<Row align="middle" justify="space-between">
											<Col>
												<SubHeading>{item.username}</SubHeading>
												<SubHeading>{item.title}</SubHeading>
											</Col>
											<Col>
												<Row align="middle">
													<HintText>{moment(item.time).fromNow()}</HintText>
													<Tooltip title="more options">
														<Button
															type="text"
															onClick={() => console.log("vertical")}
															style={{border: "none"}}
															icon={<BsThreeDotsVertical opacity={0.6} />}
														/>
													</Tooltip>
												</Row>
											</Col>
										</Row>
										<Row style={{marginTop: 12, marginBottom: 5}}>
											<TextParaGraph ellipsis={{rows: 2}}>{item.body}</TextParaGraph>
										</Row>
										<Row id="bottom row">
											<Col flex="auto"></Col>
											<Col>
												<Button
													type="text"
													style={{
														boxShadow: "5px 5px 7px rgba(200,200,200,.25)",
													}}>
													<Row
														style={{
															fontSize: ".9rem",
															opacity: 0.6,
														}}
														align="middle"
														onClick={() => this.setState({visible: true, currentIndex: index})}>
														View Content {"  "} <BsArrowRight size={25} />
													</Row>
												</Button>
											</Col>
										</Row>
									</Col>
								</Row>
							)}
							{this.state.visible && this.state.currentIndex == index && (
								<Motioner>
									<Content_View_Post onClick={() => this.setState({currentIndex: null})} item={item} />
								</Motioner>
							)}
						</Motioner>
					)
				})}
				<Row justify="center" align="middle" style={{marginTop: 20, marginBottom: 30, width: "100%"}}>
					<Col>{this.state.morePosts && <Button onClick={() => this.getMorePosts()}>load more !</Button>}</Col>
					<Col>{!this.state.morePosts && <SubHeading>no more posts</SubHeading>}</Col>
				</Row>
			</Row>
		)
	}
}
