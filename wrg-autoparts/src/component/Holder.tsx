import React, {memo} from "react"
import PropTypes from "prop-types"
import {Layout} from "antd"
import {tp} from "../helpers"
import SiderHolder from "./Sider/SiderHolder"
import ContentHolder from "./content/ContentHolder"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"

const history = createBrowserHistory()

const Holder = memo(function Holder() {
	const {Footer} = Layout
	const breakpoint = useBreakpoint()
	return (
		<Router history={history}>
			<Layout style={tp}>
				<Layout.Sider
					collapsed={breakpoint.xs}
					collapsedWidth={0}
					style={{backgroundColor: "white"}}
					collapsible
					trigger={null}>
					<SiderHolder />
				</Layout.Sider>
				<Layout.Content style={tp}>
					<ContentHolder />
				</Layout.Content>
			</Layout>
		</Router>
	)
})

export default Holder
