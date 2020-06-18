import React, {useState, ReactNode} from "react"
import {Layout, Row, Button} from "antd"
import Middle_Holder from "./components/middle/Middle_Holder"
import LeftHolder from "./components/left/LeftHolder"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import eventEmitter, {eventStrings} from "./components/helpers/EventEmitters"
import {motion, AnimatePresence} from "framer-motion"
import Signup from "./components/middle/account/Signup"

const Holder = () => {
	const [minimized, setMinimized] = useState(true)
	const [node, setNode] = useState<ReactNode>(<Signup />)
	const breakPoint = useBreakpoint()

	eventEmitter.on(eventStrings.shouldMinimize, (val) => {
		setMinimized(val)
	})

	eventEmitter.on(eventStrings.shouldSetNode, (node) => {
		setNode(node)
		setMinimized(false)
	})

	const getWidth: any = () => {
		return minimized ? "10%" : "100%"
	}
	return (
		<Layout className="container" style={{border: "0px solid black", padding: 0}}>
			<Layout.Sider collapsedWidth={minimized ? undefined : "100%"} collapsed style={{backgroundColor: "transparent"}}>
				<Layout>
					<Layout.Sider collapsed>
						<LeftHolder />
					</Layout.Sider>
					{!minimized && (
						<Layout.Content style={{margin: 20, padding: 10}}>
							<AnimatePresence>
								<motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -100}}>
									<Row justify="end">
										<Button onClick={() => setMinimized(true)}>close</Button>
									</Row>
									<Row>{node}</Row>
								</motion.div>
							</AnimatePresence>
						</Layout.Content>
					)}
				</Layout>
			</Layout.Sider>
			<Layout.Content>
				<Middle_Holder />
			</Layout.Content>
		</Layout>
	)
}

export default Holder
