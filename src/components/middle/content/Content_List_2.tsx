import React, {useState, useEffect} from "react"
import {List, Row, Col, Tooltip, Button, BackTop, Divider} from "antd"
import dataExchanger from "../../../data_layer/DataExchange"
import Motioner from "../../helpers/Motioner"
import {theme} from "../../../Theme"
import {AAvatar, SubHeading, HintText, TextParaGraph} from "../../helpers/Helpers_Index"
import moment from "moment"
import {
	BsThreeDotsVertical,
	BsChat,
	BsEye,
	BsPaperclip,
	BsArrowRight,
	BsArrowUp,
	BsHeart,
	BsFillHeartFill,
} from "react-icons/bs"
import Content_View_Post from "./Content_View_Post"
import Text from "antd/lib/typography/Text"
import dataProvider from "../../../data_layer/DataProvider"

export const Content_List_2 = (props: any) => {
	const [morePost, setMorePost] = useState(true)
	const [data, setData] = useState<any>([])
	const [visible, setVisible] = useState(false)
	const [loading, setLoading] = useState(false)
	const [currentIndex, setCurrentIndex] = useState<number | null>(null)
	useEffect(() => {
		setData(dataExchanger.postData)
	}, [])

	useEffect(() => {
		console.log(props)
		filterData()
	}, [props])

	const filterData = () => {
		setLoading(true)
		const categoryNumber = Number.parseInt(props.cat)
		const subcategoryNumber = Number.parseInt(props.sub)
		const category = dataProvider.headers[categoryNumber]
		const subcategory = dataProvider.parts[categoryNumber][subcategoryNumber]

		setData(
			dataExchanger.postData.filter((value, index) => {
				return value.category == category
			})
		)
		setLoading(false)
	}

	const getMorePosts = () => {
		setLoading(true)
		dataExchanger.getPosts().then((res) => {
			if (res) {
				if (res == 100) {
					setLoading(false)

					setMorePost(false)
					return
				}
				// setData(dataExchanger.postData)
				filterData()
			} else {
				setLoading(false)
			}
		})
	}

	return (
		<Row style={{width: "100%"}}>
			<BackTop>
				<BsArrowUp />
			</BackTop>
			<List
				style={{width: "100%"}}
				dataSource={data}
				loading={loading}
				footer={
					<Text>
						<BsFillHeartFill />
					</Text>
				}
				renderItem={(item: any, index: number) => {
					return (
						<div>
							<Motioner
								style={{
									width: "100%",
									marginTop: 29,
									backgroundColor: theme.text_white,
									padding: 20,
									borderRadius: 4,
									// border: "1px solid rgba(100,100,100,.2)",
									// boxShadow: "5px 5px 3px rgba(100,100,100,.05)",
								}}>
								{currentIndex != index && (
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
													// backgroundColor: col,
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
															setVisible(true)
															setCurrentIndex(index)
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
								{visible && currentIndex == index && (
									<Motioner>
										<Content_View_Post onClick={() => setCurrentIndex(null)} item={item} />
									</Motioner>
								)}
							</Motioner>
							<Divider style={{borderColor: theme.text_extra_light, opacity: 0.4}} />
						</div>
					)
				}}
			/>
			<Row justify="center" align="middle" style={{marginTop: 20, marginBottom: 30, width: "100%"}}>
				<Col>{morePost && <Button onClick={() => getMorePosts()}>load more !</Button>}</Col>
				<Col>{!morePost && <SubHeading>no more posts</SubHeading>}</Col>
			</Row>
		</Row>
	)
}

export default Content_List_2
