import React, {useState} from "react"
import {Router, Switch, Route} from "react-router-dom"
import {sideHistory} from "../helpers/Helpers_Index"
import {Row, Button, Menu} from "antd"
import LeftMiddle_Default from "./view/LeftMiddle_Default"
import randomColor from "randomcolor"
import Left_Default from "./view/Left_Default"
import {BsHouseDoor, BsList} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import Motioner from "../helpers/Motioner"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"

const Left_Middle = () => {
	const [defaultVisible, setDefaultVisible] = useState(true)
	const bp = useBreakpoint()

	return (
		<Motioner style={{width: "100%", padding: 0}}>
			<Menu
				mode="inline"
				inlineCollapsed={bp.sm}
				style={{
					backgroundColor: "transparent",
					flexDirection: "row-reverse",
					textAlign: "start",
					padding: 0,
					marginLeft: 0,
				}}>
				<Menu.Item
					onClick={(e) => eventEmitter.emit(eventStrings.homeSelected)}
					title="Home"
					key="home"
					icon={<BsHouseDoor style={{top: 12, position: "absolute"}} size={20} />}>
					{bp.sm && (
						<Text
							style={{
								marginLeft: 32,
								fontWeight: "bold",
								fontSize: ".7rem",
								textTransform: "uppercase",
							}}>
							Home
						</Text>
					)}
				</Menu.Item>
				<Menu.Item
					title="Categories"
					onClick={(e) => eventEmitter.emit(eventStrings.categoriesSelected)}
					icon={<BsList style={{top: 12, position: "absolute"}} size={20} />}>
					{bp.sm && (
						<Text
							style={{
								marginLeft: 32,
								fontWeight: "bold",
								fontSize: ".7rem",
								textTransform: "uppercase",
								lineHeight: 2,
							}}>
							Categories
						</Text>
					)}
				</Menu.Item>
			</Menu>
		</Motioner>
	)
}

export default Left_Middle
