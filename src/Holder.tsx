import React, {useState} from "react"
import {Layout} from "antd"
import Middle_Holder from "./components/middle/Middle_Holder"
import LeftHolder from "./components/left/LeftHolder"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import Middle_Header from "./components/middle/Middle_Header"
import {theme} from "./Theme"

const Holder = () => {
	const [] = useState(false)
	const breakPoint = useBreakpoint()

	return (
		<Layout className="Container" style={{border: "0px solid black", padding: 0}}>
			<Layout.Sider
				style={{backgroundColor: "transparent", overflow: "hidden"}}
				collapsedWidth={70}
				collapsed={breakPoint.xs}>
				<LeftHolder />
			</Layout.Sider>
			<Layout.Content
				style={{
					height: "100vh",
					overflow: "scroll",
					// paddingLeft:
					padding: 5,
					paddingLeft: breakPoint.xs ? 3 : 35,
					paddingRight: breakPoint.xs ? 3 : 35,
					zIndex: 2,
					backgroundColor: theme.color,
				}}>
				{/* <Middle_Header /> */}
				<Middle_Holder />
			</Layout.Content>
		</Layout>
	)
}

export default Holder
