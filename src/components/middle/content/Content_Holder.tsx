import React from "react"
import {Layout} from "antd"
import {Router, Switch, Route} from "react-router-dom"
import {sideHistory} from "../../helpers/Helpers_Index"
import Content_Category from "./Content_Category"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import Content_Page from "./Content_Page"
import Content_Create_Post from "./Content_Create_Post"
import Content_Home from "./Content_Home"

const Content_Holder = () => {
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
		sideHistory.push("/create-post")
	})

	return (
		<Layout>
			<Layout.Content>
				<Router history={sideHistory}>
					<Switch>
						<Route path="/home" component={Content_Home} />
						<Route path="/category/:id/:sub" component={Content_Page} />
						<Route path="/category/:id" component={Content_Page} />
						<Route path="/category" component={Content_Category} />
						<Route path="/create-post" component={Content_Create_Post} />
					</Switch>
				</Router>
			</Layout.Content>
			<Layout.Sider collapsed collapsedWidth={0}></Layout.Sider>
		</Layout>
	)
}

export default Content_Holder
