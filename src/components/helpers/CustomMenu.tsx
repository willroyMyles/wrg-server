import React, {SVGProps, useState} from "react"
import Text from "antd/lib/typography/Text"
import {Row, Col} from "antd"
import Motioner from "./Motioner"
import {IconType} from "react-icons/lib"
import {motion} from "framer-motion"
import {theme} from "../../Theme"
import eventEmitter from "./EventEmitters"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const CustomMenu = ({objects}: {objects: Array<any>}) => {
	const [index, setIndex] = useState(-1)
	const [refer, setRefer] = useState<any>()
	const breakPoint = useBreakpoint()

	return (
		<Motioner style={{width: "100%"}}>
			{objects.map((value, idx) => {
				const Iicon: IconType = value.icon
				const selected = index == idx
				const color = selected ? "rgba(50,50,50,.9)" : "rgba(100,100,100,.5)"
				return (
					<motion.div
						style={{borderRadius: 0, margin: 5}}
						whileHover={{backgroundColor: "rgba(200,200,200,.2)"}}
						// whileTap={{ scale: [1, 0.99, 1.04] }}
					>
						<Row
							id="ref"
							ref={(e) => setRefer(e)}
							onClick={() => {
								setIndex(idx)
								eventEmitter.emit(value.event)
							}}
							align="middle"
							justify="start"
							style={{padding: 7, paddingLeft: 23, marginTop: 5, marginBottom: 5, cursor: "pointer"}}>
							{selected && (
								<motion.div
									initial={{opacity: 0, scaleY: 0}}
									animate={{opacity: 1, scaleY: 1}}
									transition={{duration: 0.3}}
									style={{
										position: "absolute",
										left: 0,
										// top: 0,
										// marginBottom: document.getElementById("ref")?.clientHeight,
										// width: breakPoint.xs ? "7%" : "2%"
										width: "100%",
										height: document.getElementById("ref")?.clientHeight,
										backgroundColor: "rgba(200,200,200,.4)",
										borderLeft: `5px solid ${theme.primary_color}`,
										borderRadius: 0,
										// opacity: selected ? 0.7 : 0,
										boxShadow: "0px 0px 10px rgba(0,0,0,.05)",
										// zIndex: 0,
									}}
								/>
							)}
							<Iicon style={{zIndex: 1}} strokeWidth={0.3} color={color} size={breakPoint.xs ? 20 : 17} />
							{!breakPoint.xs && (
								<Text
									style={{
										zIndex: 1,
										textTransform: "uppercase",
										fontSize: 12,
										marginLeft: 15,
										marginTop: 1,
										fontWeight: "bold",
										textShadow: "0px 0px 1px rgba(100,100,100,.1)",
										color: color,
									}}>
									{value.name}
								</Text>
							)}
							<div />
						</Row>
					</motion.div>
				)
			})}
		</Motioner>
	)
}

export default CustomMenu
