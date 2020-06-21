import React, {useState} from "react"
import {Row, Col, Descriptions, Drawer} from "antd"
import {observer} from "mobx-react"
import dataProvider from "../../../data_layer/DataProvider"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import randomcolor from "randomcolor"
import dataExchanger from "../../../data_layer/DataExchange"
import Motioner from "../../helpers/Motioner"
import DescriptionsItem from "antd/lib/descriptions/Item"
import Title from "antd/lib/typography/Title"
import {theme} from "../../../Theme"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import {Heading, SubHeading, SectionText} from "../../helpers/Helpers_Index"
const Content_Category = observer(() => {
	const bp = useBreakpoint()

	return (
		<Motioner>
			<Heading>Categories</Heading>
			<Row gutter={[1, 1]} style={{width: "100%"}}>
				{dataProvider.headers.map((value, index) => {
					return (
						<Col span={24}>
							<div
								onClick={() => eventEmitter.emit(eventStrings.category, index)}
								style={{
									// margin: 17,
									padding: 10,
									paddingLeft: 30,
									paddingRight: 30,
									backgroundColor: "white",
									cursor: "pointer",
									borderRadius: 4,
									border: ".1px solid lightgrey",
									borderBottom: `7px solid ${theme.primary_color}`,
									boxShadow: "0px 0px 10px rgba(200,200,200,.3)",
								}}>
								<Row>
									<SectionText
										style={{
											// fontSize: ".8rem",
											fontWeight: "bold",
											color: "rgba(100,100,100,.7)",
											textShadow: "0px 0px 3px rgba(200,200,200,.2)",
										}}>
										{value}
									</SectionText>
								</Row>
								<Row style={{margin: 20}}>
									<Descriptions>
										<DescriptionsItem label="posts today">0</DescriptionsItem>
										<DescriptionsItem label="total posts">0</DescriptionsItem>
										<DescriptionsItem label="total viewed">0</DescriptionsItem>
										<DescriptionsItem label="total pending">0</DescriptionsItem>
										<DescriptionsItem label="total filled">0</DescriptionsItem>
									</Descriptions>
								</Row>
							</div>
						</Col>
					)
				})}
			</Row>
		</Motioner>
	)
})

export default Content_Category
