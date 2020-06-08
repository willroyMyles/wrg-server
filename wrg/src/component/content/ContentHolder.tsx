import React, {memo, useState} from "react"
import PropTypes from "prop-types"
import {observer} from "mobx-react"
import ContentPostsView from "./ContentPostsView"
import {Layout, Row, Col, Drawer} from "antd"
import uiStore from "../../dataLayer/UIStore"
import {tp, eventEmitter} from "../../helpers"
import {Router, Switch, Route} from "react-router-dom"
import {createBrowserHistory} from "history"
import dataProvider from "../../dataLayer/DataStore"
import RegisterAccount from "../account/RegisterAccount"

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
						<Route path="/home">
							<ContentPostsView title="home" />
						</Route>
						<Route path="/register">
							<RegisterAccount />
						</Route>
						{dataProvider.headers.map((value, index) => {
							return (
								<Route path={`/${index}`}>
									<ContentPostsView title={value} />
								</Route>
							)
						})}
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
