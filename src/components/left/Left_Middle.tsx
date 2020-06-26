import React, {useState} from "react"
import LeftMiddle_Default from "./view/LeftMiddle_Default"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const Left_Middle = () => {
	const [] = useState(true)

	return (
		<LeftMiddle_Default />
		// <Motioner style={{width: "100%", padding: 0}}>
		// 	<Menu
		// 		mode="inline"
		// 		inlineCollapsed={bp.sm}
		// 		style={{
		// 			backgroundColor: "transparent",
		// 			flexDirection: "row-reverse",
		// 			textAlign: "start",
		// 			padding: 0,
		// 			marginLeft: 0,
		// 		}}>
		// 		<Menu.Item
		// 			onClick={(e) => eventEmitter.emit(eventStrings.homeSelected)}
		// 			title="Home"
		// 			key="home"
		// 			icon={<BsHouseDoor style={{top: 12, position: "absolute"}} size={20} />}>
		// 			{bp.sm && (
		// 				<Text
		// 					style={{
		// 						marginLeft: 32,
		// 						fontWeight: "bold",
		// 						fontSize: ".7rem",
		// 						textTransform: "uppercase",
		// 					}}>
		// 					Home
		// 				</Text>
		// 			)}
		// 		</Menu.Item>
		// 		<Menu.Item
		// 			title="Categories"
		// 			onClick={(e) => eventEmitter.emit(eventStrings.categoriesSelected)}
		// 			icon={<BsList style={{top: 12, position: "absolute"}} size={20} />}>
		// 			{bp.sm && (
		// 				<Text
		// 					style={{
		// 						marginLeft: 32,
		// 						fontWeight: "bold",
		// 						fontSize: ".7rem",
		// 						textTransform: "uppercase",
		// 						lineHeight: 2,
		// 					}}>
		// 					Categories
		// 				</Text>
		// 			)}
		// 		</Menu.Item>
		// 	</Menu>
		// </Motioner>
	)
}

export default Left_Middle
