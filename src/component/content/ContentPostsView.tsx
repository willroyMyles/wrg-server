import React, {memo, useState, MouseEvent, useEffect, PureComponent} from "react"
import PropTypes from "prop-types"
import {observer} from "mobx-react"
import {Layout, Row, Button, Col, Tag, List} from "antd"
import {tp} from "../../helpers"
import Title from "antd/lib/typography/Title"
import dataProvider from "../../dataLayer/DataStore"
import uiStore from "../../dataLayer/UIStore"
import {BsPlusCircleFill} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import ContentPostListView from "./ContentPostListView"
import ContentFooter from "./ContentFooter"

interface IProps {
	title: string
}

@observer
export class ContentPostsView extends PureComponent<IProps> {
	state = {
		check: new Map(),
	}

	constructor(props: Readonly<IProps>) {
		super(props)
		dataProvider.allParts.get(uiStore.indexes.get(0))?.forEach((value, index) => {
			this.state.check.set(index, false)
		})

		this.state.check.set(-1, true)

		// this.setState({title: dataProvider.headers[uiStore.indexes.get(0)]})
	}

	componentWillUpdate(nextProps: any, nextState: any, nextContext: any) {
		if (nextProps.title != this.props.title) {
			this.uncheckedAll()
			this.state.check.set(-1, true)
		}
	}
	uncheckedAll = () =>
		this.state.check.forEach((_, __) => {
			this.state.check.set(__, false)
		})

	setCheckValue = (index: number, value: boolean) => {
		this.uncheckedAll()
		this.state.check.set(index, value)
		uiStore.indexes.set(1, index)
		this.forceUpdate()
	}

	render() {
		return (
			<div
				style={{
					flexDirection: "column",
					border: "0px solid black",
					minHeight: "100vh",
					display: "flex",
					justifyContent: "space-between",
				}}>
				<Layout style={tp}>
					<Layout.Content
						style={{
							// minHeight: "80vh",
							backgroundColor: "transparent",
						}}>
						<div style={{padding: 20, margin: 10}}>
							<Row>
								<Title style={{color: "rgba(121,132,141,1", fontWeight: "bold"}}>{this.props.title}</Title>
							</Row>
							<Row gutter={[12, 12]}>
								<Col>
									<Tag.CheckableTag
										checked={this.state.check.get(-1)}
										onChange={(v) => this.setCheckValue(-1, v)}
										style={{
											margin: 0,
											boxShadow: this.state.check.get(-1)
												? `0px 0px  1px   rgba(0,0,0,.25)`
												: `0px 0px  1px   rgba(0,0,0,.1)`,
											border: "0px solid rgba(0,0,0,.2)",
											backgroundColor: this.state.check.get(-1) ? "rgb(190, 204, 214,1)" : "transparent",
											color: "rgb(124, 133, 142,1)",
											padding: 7,
											paddingLeft: 10,
											paddingRight: 10,
											fontWeight: "bold",
											fontSize: ".80rem",
											cursor: "hand",
										}}>
										All
									</Tag.CheckableTag>
								</Col>
								{dataProvider.allParts.get(uiStore.indexes.get(0))?.map((value, index) => {
									if (index == 0) this.state.check.set(-1, false)
									return (
										<Col>
											<Tag.CheckableTag
												checked={this.state.check.get(index)}
												onChange={(v) => this.setCheckValue(index, v)}
												style={{
													margin: 0,

													border: "0px solid rgba(0,0,0,.2)",
													backgroundColor: this.state.check.get(index) ? "rgb(190, 204, 214,1)" : "transparent",
													color: "rgb(124, 133, 142,1)",
													padding: 7,
													paddingLeft: 10,
													paddingRight: 10,
													fontWeight: "bold",
													fontSize: ".80rem",
													cursor: "hand",
												}}>
												{value}
											</Tag.CheckableTag>
										</Col>
									)
								})}
							</Row>
							<Row style={{marginTop: 20, marginBottom: 20}}>
								<Button block style={{backgroundColor: "rgb(124, 133, 142,1)"}}>
									<Row align="middle" justify="center">
										<BsPlusCircleFill color="white" size={"1rem"} />
										<Text strong style={{marginLeft: 10, color: "white"}}>
											Create Post
										</Text>
									</Row>
								</Button>
							</Row>
							<ContentPostListView />
						</div>
					</Layout.Content>
					<Layout.Footer style={tp}>
						<ContentFooter />
					</Layout.Footer>
				</Layout>
			</div>
		)
	}
}
export default ContentPostsView
