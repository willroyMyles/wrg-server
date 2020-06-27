import React from "react"
import PropTypes from "prop-types"
import {Button, Row, Col} from "antd"
import {BsArrowLeft} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import {sideHistory} from "./Helpers_Index"

const BackButton = () => {
	const h = sideHistory
	return (
		<Col style={{margin: 10, marginLeft: 0, padding: 0}}>
			<Button
				onClick={() => h.goBack()}
				style={{border: "none", backgroundColor: "transparent", marginLeft: 0, margin: 0, padding: 0}}>
				<Row align="middle">
					<BsArrowLeft strokeWidth={1} size={16} />
					<Text
						style={{
							color: "black",
							textShadow: "0px 0px 1px rgba(0,0,0,.1)",
							marginLeft: 7,
							fontWeight: "bold",
						}}>
						Back
					</Text>
				</Row>
			</Button>
		</Col>
	)
}

export default BackButton
