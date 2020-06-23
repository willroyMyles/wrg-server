import React, {useState} from "react"
import {Row, Tooltip} from "antd"
import {BsHouse, BsList, BsHouseDoor} from "react-icons/bs"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import Text from "antd/lib/typography/Text"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import {theme} from "../../../Theme"
import Motioner from "../../helpers/Motioner"
import {Menu} from "evergreen-ui"

const LeftMiddle_Default = () => {
	const iconSize = 18
	const iconSizeAlt = 18
	const mar = 5
	const bp = useBreakpoint()

	const [selected, setSelected] = useState(0)

	const links = [
		[
			"home",
			<BsHouseDoor
				strokeWidth={selected == 0 ? 0.5 : 0.1}
				color={selected == 0 ? theme.primary_color : theme.text_extra_light}
				size={iconSize}
			/>,
			eventStrings.homeSelected,
		],
		[
			"categories",
			<BsList
				strokeWidth={selected == 1 ? 0.5 : 0.1}
				color={selected == 1 ? theme.primary_color : theme.text_extra_light}
				size={iconSize}
			/>,
			eventStrings.categoriesSelected,
		],
	]
	return (
		<Row
			align="middle"
			justify={bp.xs ? "center" : "start"}
			style={{border: "0px solid black", marginTop: "10vh", width: "100%"}}>
			{links.map((arr: Array<any>, index) => {
				const isSauce = selected == index
				return (
					<Motioner style={{marginTop: mar, width: "100%"}} key="index">
						<Tooltip placement="right" mouseEnterDelay={1} title={arr[0]}>
							<Row
								align="middle"
								style={{
									width: "100%",
									borderRadius: 0,
									// border: isSauce ? ".1px solid rgba(100,100,100,.1)" : "none",
									// backgroundColor: isSauce ? theme.text_white : "transparent",
									// boxShadow: isSauce ? "0px 0px 25px rgba(150,150,150,.1)" : "none",
									padding: 7,
									paddingLeft: 10,
									paddingRight: 10,
									cursor: "pointer",
									// borderRight: isSauce ? `1px solid ${theme.primary_color}` : "none",
								}}
								onClick={() => {
									eventEmitter.emit(arr[2])
									setSelected(index)
								}}>
								{arr[1]}
								{!bp.xs && (
									<Text
										style={{
											marginLeft: 10,
											color: isSauce ? theme.primary_color : theme.text_extra_light,
											fontWeight: isSauce ? "bold" : "normal",
											fontSize: ".85rem",
											textTransform: "uppercase",
										}}>
										{arr[0]}
									</Text>
								)}
							</Row>
						</Tooltip>
					</Motioner>
				)
			})}
		</Row>
	)
}

export default LeftMiddle_Default
