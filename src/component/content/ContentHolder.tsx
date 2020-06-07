import React, {memo, useState} from "react"
import PropTypes from "prop-types"
import {observer} from "mobx-react"
import ContentPostsView from "./ContentPostsView"
import {Layout, Row, Col, Drawer} from "antd"
import uiStore from "../../dataLayer/UIStore"
import {tp, eventEmitter} from "../../helpers"

const ContentHolder = memo(
	observer(function ContentHolder() {
		const [visible, setVisible] = useState(false)

		eventEmitter.on("open", () => {
			setVisible(true)
		})
		return (
			<Layout style={{backgroundColor: "transparent", maxHeight: "100vh", overflowY: "scroll"}}>
				<Layout.Content style={tp}>
					{uiStore.indexes.get(0) != -1 && <ContentPostsView title={uiStore.currentName} />}
				</Layout.Content>

				<Drawer
					// style={{position: "absolute"}}
					getContainer={false}
					visible={visible}
					closable
					onClose={() => setVisible(false)}>
					hello from a drawer
				</Drawer>
			</Layout>
		)
	})
)

export default ContentHolder
