import React, {SVGProps, useState} from "react"
import Text from "antd/lib/typography/Text"
import {Row} from "antd"
import Motioner from "./Motioner"
import {IconType} from "react-icons/lib"
import {motion} from "framer-motion"
import {theme} from "../../Theme"
import eventEmitter from "./EventEmitters"

const CustomMenu = ({objects}: {objects: Array<any>}) => {
	const [index, setIndex] = useState(-1)

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
						whileTap={{scale: [1, 0.99, 1.04]}}>
						<Row
							onClick={() => {
								setIndex(idx)
								eventEmitter.emit(value.event)
							}}
							align="middle"
							justify="start"
							style={{padding: 7, paddingLeft: 23, marginTop: 5, marginBottom: 5, cursor: "pointer"}}>
							<motion.div
								animate
								style={{
									position: "absolute",
									left: 0,
									width: "3%",
									height: "4.8%",
									backgroundColor: theme.primary_color,
									borderRadius: 0,
									opacity: selected ? 0.7 : 0,
									boxShadow: "0px 0px 10px rgba(0,0,0,.5)",
								}}
							/>
							<Iicon strokeWidth={0.3} color={color} size={17} />
							<Text
								style={{
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
							<div />
						</Row>
					</motion.div>
				)
			})}
		</Motioner>
	)
}

export default CustomMenu
