import React, {memo, useState, PureComponent} from "react"
import PropTypes from "prop-types"
import {Col, Row, Menu, Tooltip, Button, Radio, List, Tag, Comment, BackTop} from "antd"
import {BsGrid, BsList} from "react-icons/bs"
import {strToNum} from "../../helpers"
import TagGroup from "../../helpers/TagGroup"
import dataProvider from "../../dataLayer/DataStore"
import Paragraph from "antd/lib/typography/Paragraph"
import moment from "moment"
import Text from "antd/lib/typography/Text"

class ContentPostListView extends PureComponent {
	state = {
		autoLayout: true,
		filter: 2,
		loading: false,
	}

	tagChanged = (index: number) => {
		this.setState({filter: index})
		//TODO send to fileter array
	}

	loadMore = () => {
		this.setState({loading: true})

		dataProvider.getFakerData().then((res) => {
			this.setState({loading: false})
		})
	}

	LoadMoreButton = () => {
		return <Button onClick={() => this.loadMore()}>load more</Button>
	}

	render() {
		return (
			<div>
				<Row justify="space-between">
					<Col>
						<TagGroup onChanged={this.tagChanged} tags={["all", "open", "closed", "inactive"]} initial="all" />
					</Col>
					<Col flex="auto" />
					<Col sm={4} xs={0}>
						<Row justify="end">
							<Menu
								selectedKeys={this.state.autoLayout ? ["0"] : ["1"]}
								onClick={(e) => {
									var num = Number.parseInt(e.key)
									var bool = num === 0 ? true : false
									this.setState({autoLayout: bool})
								}}
								mode="horizontal"
								style={{backgroundColor: "transparent"}}>
								<Menu.Item key={"0"}>
									<Tooltip title="Auto">
										<BsGrid />
									</Tooltip>
								</Menu.Item>
								<Menu.Item key={"1"}>
									<Tooltip title="List">
										<BsList />
									</Tooltip>
								</Menu.Item>
							</Menu>
						</Row>
					</Col>
				</Row>
				<Row>
					<List
						style={{width: "100%", marginTop: 20}}
						grid={!this.state.autoLayout ? {gutter: 6, column: 1} : {gutter: 9, xs: 1, sm: 1, md: 2, lg: 2, xl: 3}}
						dataSource={dataProvider.fakerData}
						loadMore={<this.LoadMoreButton />}
						loading={this.state.loading}
						renderItem={(item, index) => {
							return (
								<List.Item>
									<Comment
										className="post"
										content={<Paragraph ellipsis={{rows: 1}}>{item.desc}</Paragraph>}
										author={item.title}
										avatar={item.avatar}
										datetime={moment(item.date).format("HH MM")}
										actions={[<Button>view</Button>]}
									/>
								</List.Item>
							)
						}}
					/>
					<BackTop>up</BackTop>
				</Row>
			</div>
		)
	}
}

const styles: React.CSSProperties = {
	backgroundColor: "transparent",
	marginLeft: 5,
	marginRight: 5,
	border: "none",
}
export default ContentPostListView
