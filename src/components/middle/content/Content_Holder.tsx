import React, {useState, ReactNode, useEffect} from "react"
import {Layout, Drawer, Modal} from "antd"
import {Router, Switch, Route} from "react-router-dom"
import {sideHistory} from "../../helpers/Helpers_Index"
import Content_Category from "./Content_Category"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import Content_Page from "./Content_Page"
import Content_Create_Post from "./Content_Create_Post"
import Content_Home from "./Content_Home"
import Middle_Header from "../Middle_Header"
import Signup from "../account/Signup"
import Motioner from "../../helpers/Motioner"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import Settings from "../account/Settings"
import {theme} from "../../../Theme"
import Content_View_Post from "./Content_View_Post"
import Profile_View_Other from "../account/Profile_View_Other"

const Content_Holder = () => {
	const bp = useBreakpoint()

	const [visible, setVisible] = useState(false)
	const [node, setNode] = useState<ReactNode>(<Content_Create_Post />)

	useEffect(() => {
		eventEmitter.on(eventStrings.showDrawer, (val) => {
			if (val != undefined) setVisible(val)
			else setVisible(true)
		})

		eventEmitter.on(eventStrings.shouldSetNode, (node) => {
			setNode(node)
		})
		eventEmitter.on(eventStrings.categoriesSelected, () => {
			sideHistory.push("/category")
		})
		eventEmitter.on(eventStrings.category, (index) => {
			sideHistory.push(`/category/${index}`)
		})

		eventEmitter.on(eventStrings.sub_category, (array) => {
			sideHistory.push(`/category/${array[0]}/${array[1]}`)
		})

		eventEmitter.on(eventStrings.createPost, () => {
			setNode(<Content_Create_Post />)
			setVisible(true)
		})

		eventEmitter.on(eventStrings.homeSelected, () => {
			sideHistory.push("/")
		})

		eventEmitter.on(eventStrings.settingsSelected, () => {
			sideHistory.push("/settings")
		})

		eventEmitter.on(eventStrings.PostSelected, (post) => {
			setVisible(true)
			// setNode(<Content_View_Post item={post} />)
		})

		eventEmitter.on(eventStrings.showOtherProfile, (profile) => {
			setVisible(true)
			setNode(<Profile_View_Other item={profile} />)
		})
	}, [])

	return (
		<Layout id="holder" style={{backgroundColor: theme.faint, padding: 10}}>
			<Layout.Content>
				<Drawer
					destroyOnClose
					width={bp.xs ? "100%" : "78%"}
					drawerStyle={{backgroundColor: theme.faint}}
					visible={visible}
					onClose={() => setVisible(false)}>
					<div>{node}</div>
				</Drawer>
				<Router history={sideHistory}>
					<Switch>
						<Route path="/" exact component={Content_Home} />
						<Route path="/home" component={Content_Home} />
						<Route path="/category/:id/:sub" component={Content_Page} />
						<Route path="/category/:id" component={Content_Page} />
						<Route path="/category" component={Content_Category} />
						<Route path="/create-post" component={Content_Create_Post} />
						<Route path="/settings" component={Settings} />
					</Switch>
				</Router>
			</Layout.Content>
		</Layout>
	)
}

export default Content_Holder
