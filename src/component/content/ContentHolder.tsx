import React, {memo} from "react"
import PropTypes from "prop-types"
import {observer} from "mobx-react"
import ContentPostsView from "./ContentPostsView"
import {Layout, Row, Col} from "antd"

const ContentHolder = memo(
	observer(function ContentHolder() {
		return (
			<Layout>
				<Layout.Content>
					<ContentPostsView />
				</Layout.Content>
				<Layout.Footer>
					<Row>
						<Col>hello</Col>
					</Row>
				</Layout.Footer>
			</Layout>
		)
	})
)

export default ContentHolder
