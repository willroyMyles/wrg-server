import React, {memo} from "react"
import PropTypes from "prop-types"
import {Row, Col} from "antd"

const ContentFooter = memo(function ContentFooter() {
	return (
		<Row align="middle" justify="center" style={{margin: 10, justifyContent: "center", border: "0px solid black"}}>
			<Col>
				<Row justify="center" style={{width: "100%"}}>
					<h2>WRG Autoparts</h2>
				</Row>
				<Row justify="center" style={{width: "100%"}}>
					<h5>powered by fortech</h5>
				</Row>
				<Row justify="center" style={{width: "100%"}}>
					<small>
						copyright <span>2010</span>
					</small>
				</Row>
			</Col>
		</Row>
	)
})

export default ContentFooter
