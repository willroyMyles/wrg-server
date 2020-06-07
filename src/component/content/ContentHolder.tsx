import React, {memo} from "react"
import PropTypes from "prop-types"
import {observer} from "mobx-react"
import ContentPostsView from "./ContentPostsView"
import {Layout, Row, Col} from "antd"
import uiStore from "../../dataLayer/UIStore"
import {tp} from "../../helpers"

const ContentHolder = memo(
	observer(function ContentHolder() {
		return (
			<Layout style={tp}>
				<Layout.Content style={tp}>
					{uiStore.indexes.get(0) != -1 && <ContentPostsView title={uiStore.currentName} />}
				</Layout.Content>
				<Layout.Footer style={tp}>
					<Row>
						<Col>hello</Col>
					</Row>
				</Layout.Footer>
			</Layout>
		)
	})
)

export default ContentHolder
