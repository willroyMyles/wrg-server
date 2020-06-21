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

const Content_Holder = () => {
	const bp = useBreakpoint()

	const [visible, setVisible] = useState(false)
	const [node, setNode] = useState<ReactNode>(<Signup />)

	useEffect(() => {
		eventEmitter.on(eventStrings.showDrawer, () => {
			setVisible(true)
		})

		eventEmitter.on(eventStrings.shouldSetNode, (node) => {
			setNode(node)
		})
		eventEmitter.on(eventStrings.categoriesSelected, () => {
			sideHistory.push("/category")
			console.log(sideHistory.length)
		})
		eventEmitter.on(eventStrings.category, (index) => {
			sideHistory.push(`/category/${index}`)
		})

		eventEmitter.on(eventStrings.sub_category, (array) => {
			sideHistory.push(`/category/${array[0]}/${array[1]}`)
		})

		eventEmitter.on(eventStrings.createPost, () => {
			sideHistory.push("/create-post")
		})

		eventEmitter.on(eventStrings.homeSelected, () => {
			sideHistory.push("/")
		})

		eventEmitter.on(eventStrings.settingsSelected, () => {
			sideHistory.push("/settings")
		})
	}, [])

	return (
		<Layout id="holder" style={{backgroundColor: "transparent"}}>
			<Layout.Content>
				<Drawer width={bp.xs ? "100%" : "78%"} visible={visible} onClose={() => setVisible(false)}>
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
