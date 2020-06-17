import React from "react"
import {Row, Col} from "antd"
import {observer} from "mobx-react"
import dataProvider from "../../../data_layer/DataProvider"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"

const Content_Category = observer(() => {
	return (
		<Row>
			{dataProvider.headers.map((value, index) => {
				return (
					<Col
						onClick={() => eventEmitter.emit(eventStrings.category, index)}
						style={{
							margin: 7,
							padding: 10,
							paddingLeft: 30,
							paddingRight: 30,
							backgroundColor: "white",
							boxShadow: "0px 0px 10px rgba(0,20,50,.1)",
							cursor: "pointer",
							borderRadius: 4,
						}}>
						<span
							style={{
								fontSize: ".8rem",
								fontWeight: "bold",
								color: "rgba(100,100,100,.7)",
								textShadow: "0px 0px 3px rgba(200,200,200,.2)",
							}}>
							{value}
						</span>
					</Col>
				)
			})}
		</Row>
	)
})

export default Content_Category
