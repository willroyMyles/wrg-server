import React from "react"
import {Row, Col, Descriptions} from "antd"
import {observer} from "mobx-react"
import dataProvider from "../../../data_layer/DataProvider"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import randomcolor from "randomcolor"
import dataExchanger from "../../../data_layer/DataExchange"
import Motioner from "../../helpers/Motioner"
import DescriptionsItem from "antd/lib/descriptions/Item"
import Title from "antd/lib/typography/Title"
const Content_Category = observer(() => {
	return (
		<Row>
			{dataProvider.headers.map((value, index) => {
				var col = randomcolor({
					alpha: 0.2,
					// hue: "079",
					format: "rgba",
					seed: dataExchanger.username,
				})
				var col1 = randomcolor({
					alpha: 1,
					// hue: "079",
					format: "rgba",
					seed: dataExchanger.username,
				})
				return (
					<Col
						onClick={() => eventEmitter.emit(eventStrings.category, index)}
						style={{
							margin: 17,
							padding: 10,
							paddingLeft: 30,
							paddingRight: 30,
							backgroundColor: "white",
							boxShadow: `0px 3px 10px ${col}`,
							cursor: "pointer",
							borderRadius: 1,
							borderBottom: `5px solid ${col1}`,
						}}>
						<span>
							<Row>
								<Title
									level={3}
									style={{
										// fontSize: ".8rem",
										fontWeight: "bold",
										color: "rgba(100,100,100,.7)",
										textShadow: "0px 0px 3px rgba(200,200,200,.2)",
									}}>
									{value}
								</Title>
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
						</span>
					</Col>
				)
			})}
		</Row>
	)
})

export default Content_Category
