import React, {Component, PureComponent, useState, useEffect} from "react"
import PropTypes from "prop-types"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import Motioner from "../../helpers/Motioner"
import {Row, List, Col, Button, Tooltip, BackTop} from "antd"
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
import {BsThreeDotsVertical, BsArrowBarRight, BsArrowRight, BsChat, BsEye, BsPaperclip} from "react-icons/bs"
import {AnimatePresence} from "framer-motion"
import dataProvider from "../../../data_layer/DataProvider"
import logger from "../../helpers/Logger"

export class Content_List extends PureComponent<any> {
	state = {
		visible: false,
		data: [],
		currentIndex: null,
		morePosts: true,
		loading: false,
	}

	filterData = () => {
		this.setState({loading: true, data: dataExchanger.postData})
		const catNum = Number.parseInt(this.props.cat)
		const subNum = Number.parseInt(this.props.sub)
		var category = dataProvider.headers[catNum]
		var subcategory = dataProvider.parts[catNum][subNum]
		var dataa = dataExchanger.postData.filter((value, index) => {
			return value.category == category
		})
		console.log(dataa)
		this.setState((state, props) => {
			logger.log(state, props, this.state.data.length)
			this.forceUpdate()
			return {loading: false, data: dataa}
		})
	}

	constructor(props: any) {
		super(props)
		eventEmitter.addListener(eventStrings.sub_category, (item) => {
			// logger.log(item, "before filter")
			this.filterData()
		})
	}

	getMorePosts = () => {
		this.setState({loading: true})
		dataExchanger.getPosts().then((res) => {
			if (res) {
				if (res == 100) {
					this.setState({morePosts: false, loading: false})
					return
				}
				this.filterData()
			} else {
				this.setState({loading: false})
			}
		})
	}

	render() {
		return (
			<Row>
				<BackTop />
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
										<Row id="bottom row" gutter={[24, 0]}>
											<Col>
												<Tooltip title={`${item.replies.length} comments`}>
													<Row align="middle" style={{opacity: 0.6}}>
														<Text>{item.replies.length} </Text>
														<BsChat strokeWidth={0.3} style={{marginLeft: 7}} size={14} />
													</Row>
												</Tooltip>
											</Col>
											<Col>
												<Tooltip title={`${item.replies.length} views`}>
													<Row align="middle" style={{opacity: 0.6}}>
														<Text>0 </Text>
														<BsEye strokeWidth={0.3} style={{marginLeft: 7}} size={16} />
													</Row>
												</Tooltip>
											</Col>
											<Col>
												<Tooltip title={`${item.replies.length} attatchments`}>
													<Row align="middle" style={{opacity: 0.6}}>
														<Text>0 </Text>
														<BsPaperclip
															rotate={45}
															strokeWidth={0.2}
															style={{marginLeft: 7, transform: "rotate(45deg)"}}
															size={16}
														/>
													</Row>
												</Tooltip>
											</Col>
											<Col flex="auto"></Col>
											<Col>
												<Button
													onClick={() => {
														this.setState({visible: true, currentIndex: index})
													}}
													// type="text"
													style={{
														boxShadow: "5px 5px 0px rgba(200,200,200,.0)",
													}}>
													<Row align="middle">
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

export default Content_List
