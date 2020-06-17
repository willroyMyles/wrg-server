import React from "react"
import {Layout} from "antd"
import Middle_Holder from "./components/middle/Middle_Holder"
import LeftHolder from "./components/left/LeftHolder"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const Holder = () => {
	const breakPoint = useBreakpoint()
	return (
		<Layout className="container" style={{border: "0px solid black", padding: 0}}>
			<Layout.Sider
				collapsed
				// collapsedWidth={breakPoint.xs ? "12%" : breakPoint.sm ? "12%" : "7%"}
				style={{backgroundColor: "transparent"}}>
				<LeftHolder />
			</Layout.Sider>
			<Layout.Content>
				<Middle_Holder />
			</Layout.Content>
		</Layout>
	)
}

export default Holder
