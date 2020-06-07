import React, {memo} from "react"
import PropTypes from "prop-types"
import {Layout} from "antd"
import {tp} from "../helpers"
import SiderHolder from "./Sider/SiderHolder"
import ContentHolder from "./content/ContentHolder"

const Holder = memo(function Holder() {
	const {Footer} = Layout
	return (
		<Layout style={tp}>
			<Layout.Sider style={{backgroundColor: "white"}} collapsible trigger={null}>
				<SiderHolder />
			</Layout.Sider>
			<Layout.Content style={tp}>
				<ContentHolder />
			</Layout.Content>
		</Layout>
	)
})

export default Holder
