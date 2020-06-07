import React, {memo} from "react"
import PropTypes from "prop-types"
import {Row, Avatar} from "antd"
import Text from "antd/lib/typography/Text"

const Top = memo(function Top() {
	return (
		<div>
			<Row align="middle" justify="center" style={{minHeight: "10vh"}}>
				<Avatar size="large" alt="WRG">
					WRG
				</Avatar>
				<Text className="side-links-header">WRG</Text>
			</Row>
		</div>
	)
})

export default Top
