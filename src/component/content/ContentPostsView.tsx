import React, {memo, useState, MouseEvent, useEffect} from "react"
import PropTypes from "prop-types"
import {observer} from "mobx-react"
import {Layout, Row, Button, Col, Tag, List} from "antd"
import {tp} from "../../helpers"
import Title from "antd/lib/typography/Title"
import dataProvider from "../../dataLayer/DataStore"
import uiStore from "../../dataLayer/UIStore"

export const ContentPostsView = memo(
	observer(() => {
		const [check, setCheck] = useState<Map<number, boolean>>(new Map())

		setCheck(new Map())
		dataProvider.allParts.get(uiStore.indexes.get(0))?.forEach((value, index) => {
			check.set(index, false)
		})

		const setCheckValue = (index: number, value: boolean) => {
			check.set(index, value)
		}

		return (
			<div>
				<Layout style={tp}>
					<Layout.Content style={tp}>
						<div style={{padding: 20, margin: 10}}>
							<Row>
								<Title>{dataProvider.headers[uiStore.indexes.get(0)]}</Title>
							</Row>
							<Row gutter={12}>
								<List
									dataSource={dataProvider.tags}
									renderItem={(item: React.ReactNode, index: number) => {
										// const [visible, setVisible] = useState(false)
										return (
											<Tag.CheckableTag
												checked={check.get(index) ? true : false}
												onChange={(_) => setCheckValue(index, _)}
												style={{
													margin: 5,
													// boxShadow: visible ? `0px 0px  15px   rgba(0,0,0,.25)` : `0px 0px  2px   rgba(0,0,0,.1)`,
													border: ".1px solid rgba(0,0,0,.2)",
													// backgroundColor: visible ? "blue" : "white",
													padding: 5,
													paddingLeft: 7,
													paddingRight: 7,
													fontWeight: "bold",
													cursor: "hand",
												}}>
												{item}
											</Tag.CheckableTag>
										)
									}}
								/>
							</Row>
						</div>
					</Layout.Content>
					<Layout.Sider></Layout.Sider>
				</Layout>
			</div>
		)
	})
)

export default ContentPostsView
