import React, {memo, useState} from "react"
import PropTypes from "prop-types"
import {observer} from "mobx-react"
import ContentPostsView from "./ContentPostsView"
import {Layout, Row, Col, Drawer} from "antd"
import uiStore from "../../dataLayer/UIStore"
import {tp, eventEmitter} from "../../helpers"
import {Router, Switch, Route} from "react-router-dom"
import {createBrowserHistory} from "history"

const ContentHolder = memo(
	observer(function ContentHolder() {
		const [visible, setVisible] = useState(false)

		const history = createBrowserHistory()

		eventEmitter.on("open", () => {
			setVisible(true)
		})
		return (
			<Layout style={{backgroundColor: "transparent", maxHeight: "100vh", overflowY: "scroll"}}>
				<Layout.Content style={tp}>
					{/* <Router history={history}> */}
					<Switch>
						<Route path="/-1">
							<ContentPostsView title="home" />
						</Route>
						<Route path="/0">
							<ContentPostsView title={uiStore.currentName} />
						</Route>
						<Route path="/1">
							<ContentPostsView title={uiStore.currentName} />
						</Route>
						<Route path="/2">
							<ContentPostsView title={uiStore.currentName} />
						</Route>
					</Switch>
					{/* </Router> */}
					{/* {uiStore.indexes.get(0) != -1 && <ContentPostsView title={uiStore.currentName} />} */}
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
