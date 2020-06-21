import React, {useState, ReactNode} from "react"
import {Layout, Row, Button, Drawer} from "antd"
import Middle_Holder from "./components/middle/Middle_Holder"
import LeftHolder from "./components/left/LeftHolder"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import eventEmitter, {eventStrings} from "./components/helpers/EventEmitters"
import {motion, AnimatePresence} from "framer-motion"
import Signup from "./components/middle/account/Signup"
import Middle_Header from "./components/middle/Middle_Header"

const Holder = () => {
	const [minimized, setMinimized] = useState(false)
	const breakPoint = useBreakpoint()

	return (
		<Layout style={{border: "0px solid black", padding: 0}}>
			<Layout.Sider
				style={{backgroundColor: "transparent", overflow: "hidden"}}
				collapsedWidth={70}
				collapsed={breakPoint.xs}>
				<LeftHolder />
			</Layout.Sider>
			<Layout.Content style={{height: "100vh", overflow: "scroll", paddingLeft: breakPoint.xs ? 3 : 35, zIndex: 2}}>
				<Middle_Header />
				<Middle_Holder />
			</Layout.Content>
		</Layout>
	)
}

export default Holder
