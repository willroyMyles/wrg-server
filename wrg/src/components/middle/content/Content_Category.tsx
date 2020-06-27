import React, {useState, useEffect} from "react"
import {Row, Col, Descriptions, Drawer, List} from "antd"
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
import {DescText} from "../account/Profile_View_Other"
const Content_Category = observer(() => {
	const bp = useBreakpoint()
	const [data, setData] = useState(dataExchanger.statictics)

	useEffect(() => {
		dataExchanger.getStatictics().then((res) => {
			if (res) {
				setData(dataExchanger.statictics)
			} else {
			}
		})
	}, [])

	const col = theme.primary_color.slice(0, 7)

	return (
		<Motioner>
			<Heading>Categories</Heading>
			<List
				dataSource={dataProvider.headers}
				grid={{gutter: 10, xl: 3, md: 2, sm: 2, xs: 1, lg: 3, xxl: 4}}
				renderItem={(item, index) => {
					return (
						<Col span={24}>
							<div
								onClick={() => eventEmitter.emit(eventStrings.category, index)}
								style={{
									margin: 17,
									padding: 10,
									paddingLeft: 30,
									paddingRight: 30,
									backgroundColor: "white",
									cursor: "pointer",
									borderRadius: 4,
									border: ".1px solid rgba(100,100,100,.1)",
									borderBottom: `2px solid ${col}55`,
									boxShadow: `3px 3px 10px rgba(200,200,200,.3)`,
								}}>
								<Row>
									<SectionText>{item}</SectionText>
								</Row>
								<Row style={{marginTop: 20}} align="middle" justify="space-around" gutter={[20, 10]}>
									<Col>
										<DescText title="total" value={data.get(index)?.total | 0} />{" "}
									</Col>
									<Col>
										<DescText title="available" value={data.get(index)?.available | 0} />{" "}
									</Col>
									<Col>
										<DescText title="pending" value={data.get(index)?.pending | 0} />{" "}
									</Col>
									<Col>
										<DescText title="filled" value={data.get(index)?.filled | 0} />{" "}
									</Col>
								</Row>
							</div>
						</Col>
					)
				}}
			/>
		</Motioner>
	)
})

export default Content_Category
